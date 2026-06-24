// src/main/java/com/neobank/service/CardService.java

package com.neobank.service;

import com.neobank.dto.card.*;
import com.neobank.entity.*;
import com.neobank.entity.OtpVerification.OtpPurpose;
import com.neobank.exception.NeoBankException;
import com.neobank.repository.*;
import com.neobank.util.CardNumberGenerator;
import com.neobank.util.TransactionReferenceGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class CardService {

    private final DebitCardRepository        cardRepository;
    private final CardTransactionRepository  cardTxnRepository;
    private final AccountRepository          accountRepository;
    private final UserRepository             userRepository;
    private final TransactionRepository      transactionRepository;
    private final OtpService                 otpService;
    private final PasswordEncoder            passwordEncoder;
    private final CardNumberGenerator        cardNumberGenerator;
    private final TransactionReferenceGenerator refGen;
    private final MailService                mailService;

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");

    // ─────────────────────────────────────────────
    //  REQUEST CARD (Customer)
    //  Creates card with PENDING status
    //  Admin must approve before card is active
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO requestCard(
            RequestCardDTO req, String username) {

        User    user    = findUser(username);
        Account account = findAccount(req.getAccountNumber());
        validateOwnership(account, username);

        if (!account.isOperable()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ACCOUNT_NOT_OPERABLE",
                    "Cannot request card for a " +
                    account.getStatus().name() + " account.");
        }

        // Only 1 non-cancelled card per account
        boolean hasCard = cardRepository
                .findByAccountIdAndStatusNotOrderByCreatedAtDesc(
                        account.getId(), DebitCard.CardStatus.CANCELLED)
                .stream()
                .anyMatch(c ->
                    c.getStatus() == DebitCard.CardStatus.ACTIVE ||
                    c.getStatus() == DebitCard.CardStatus.BLOCKED ||
                    c.getRequestStatus() == DebitCard.CardRequestStatus.PENDING);

        if (hasCard) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "CARD_EXISTS",
                    "An active or pending card already exists for this account.");
        }

        // Resolve network
        DebitCard.CardNetwork network = DebitCard.CardNetwork.RUPAY;
        if (req.getNetwork() != null) {
            try {
                network = DebitCard.CardNetwork.valueOf(
                        req.getNetwork().toUpperCase());
            } catch (Exception e) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_NETWORK",
                        "Network must be RUPAY, VISA, or MASTERCARD.");
            }
        }

        // Generate card number and CVV immediately
        // But card is NOT active until admin approves
        String cardNumber = cardNumberGenerator.generate();
        String rawCvv     = cardNumberGenerator.generateCvv();

        String cardholderName = user.getFullName() != null
                ? user.getFullName().toUpperCase()
                : user.getUsername().toUpperCase();

        DebitCard card = DebitCard.builder()
                .cardNumber(cardNumber)
                .account(account)
                .user(user)
                .cardholderName(cardholderName)
//                .cvvHash(passwordEncoder.encode(rawCvv))
                .cvvHash(rawCvv)
                .expiryDate(LocalDate.now().plusYears(3))
                .status(DebitCard.CardStatus.PENDING_APPROVAL) // ← BLOCKED until approved
                .requestStatus(DebitCard.CardRequestStatus.PENDING)
                .requestReason(req.getRequestReason() != null
                        ? req.getRequestReason().trim() : "Card request")
                .pinSet(false)
                .network(network)
                .onlineLimit(new BigDecimal("25000"))
                .atmLimit(new BigDecimal("10000"))
                .dailyLimit(new BigDecimal("50000"))
                .replacementRequested(false)
                .failedPinAttempts(0)
                .cvvRevealCount(0)
                .build();

        DebitCard saved = cardRepository.save(card);
        log.info("Card requested: **** {} account: {} by: {}",
                cardNumber.substring(12), account.getAccountNumber(), username);

        // Notify customer
        notifyCardRequested(saved);

        return buildResponse(saved);
    }

    // ─────────────────────────────────────────────
    //  GET MY CARDS (Customer)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<CardResponseDTO> getMyCards(String username) {
        User user = findUser(username);
        return cardRepository
                .findByUserIdAndStatusNotOrderByCreatedAtDesc(
                        user.getId(), DebitCard.CardStatus.CANCELLED)
                .stream().map(this::buildResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  SEND OTP TO REVEAL CARD DETAILS
    //  Customer requests full card number + CVV
    //  OTP verification required
    // ─────────────────────────────────────────────

    public void sendRevealOtp(Long cardId, String username) {
        DebitCard card = findCard(cardId, username);

        if (card.getRequestStatus() != DebitCard.CardRequestStatus.APPROVED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_NOT_APPROVED",
                    "Card is not yet approved by admin.");
        }

        otpService.sendOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_DETAILS_REVEAL,
                "NeoBank — Card Details Reveal OTP",
                """
                Dear Customer,

                Your OTP to reveal card details for card ****%s: {OTP}

                Valid for 10 minutes.
                ⚠ Do NOT share this OTP with anyone.
                ⚠ Your card details (number and CVV) are sensitive.
                   Do not share them with anyone.

                NeoBank Team
                """.formatted(card.getCardNumber().substring(12))
        );
    }

    // ─────────────────────────────────────────────
    //  REVEAL CARD DETAILS (full number + CVV)
    //  OTP verified, returns full details ONCE
    // ─────────────────────────────────────────────

    @Transactional
    public RevealCardDetailsResponseDTO revealCardDetails(
            RevealCardDetailsRequestDTO req, String username) {

        DebitCard card = findCard(Long.parseLong(req.getCardId()), username);

        if (card.getRequestStatus() != DebitCard.CardRequestStatus.APPROVED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_NOT_APPROVED", "Card is not yet approved.");
        }
        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED", "Card is cancelled.");
        }

        // Verify OTP
        otpService.verifyOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_DETAILS_REVEAL,
                req.getOtp());

        // Track reveal (for security audit)
        card.setCvvRevealCount(card.getCvvRevealCount() + 1);
        card.setLastCvvRevealedAt(LocalDateTime.now());
        cardRepository.save(card);

        // CVV is stored hashed — we cannot reverse BCrypt
        // In production: use AES encryption for CVV, not BCrypt
        // For this project: re-generate CVV from seed (not real banking)
        // Instead, we send CVV via email and show masked here
        // REAL SOLUTION: Store CVV with AES-256 encryption, decrypt on reveal

        // For demo: notify and return card number (CVV shown as masked)
        log.info("Card details revealed: **** {} by {} (reveal count: {})",
                card.getCardNumber().substring(12),
                username, card.getCvvRevealCount());

        // Send full details to registered email
        sendCardDetailsEmail(card);

        return RevealCardDetailsResponseDTO.builder()
                .cardNumber(formatCardNumber(card.getCardNumber()))
//                .cvv("Sent to registered email")  // CVV via email only
                .cvv(card.getCvvHash())
                .expiryDisplay(card.getDisplayExpiry())
                .cardholderName(card.getCardholderName())
                .network(card.getNetwork().name())
                .build();
    }

    // ─────────────────────────────────────────────
    //  SEND OTP FOR PIN CHANGE
    // ─────────────────────────────────────────────

    public void sendPinChangeOtp(Long cardId, String username) {
        DebitCard card = findCard(cardId, username);
        validateCardUsable(card);

        otpService.sendOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_PIN_SETUP,
                "NeoBank — Card PIN Change OTP",
                """
                Dear Customer,

                Your OTP to change card PIN for card ****%s: {OTP}

                Valid for 10 minutes.
                Do NOT share this OTP with anyone.

                NeoBank Team
                """.formatted(card.getCardNumber().substring(12))
        );
    }

    // ─────────────────────────────────────────────
    //  CHANGE CARD PIN (OTP verified)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO changeCardPin(
            ChangeCardPinRequestDTO req, String username) {

        DebitCard card = findCard(Long.parseLong(req.getCardId()), username);
        validateCardUsable(card);

        // Verify OTP
        otpService.verifyOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_PIN_SETUP,
                req.getOtp());

        // Validate PIN
        validatePin(req.getNewPin(), req.getConfirmPin());

        card.setPinHash(passwordEncoder.encode(req.getNewPin()));
        card.setPinSet(true);
        card.resetPinAttempts();
        cardRepository.save(card);

        log.info("Card PIN changed: **** {} by {}",
                card.getCardNumber().substring(12), username);

        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  BLOCK CARD (Customer)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO blockCard(
            Long cardId, String reason, String username) {

        DebitCard card = findCard(cardId, username);

        if (card.getStatus() == DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ALREADY_BLOCKED", "Card is already blocked.");
        }
        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED", "Cannot block a cancelled card.");
        }

        card.setStatus(DebitCard.CardStatus.BLOCKED);
        card.setBlockReason(reason != null ? reason.trim() : "Blocked by cardholder");
        card.setBlockedAt(LocalDateTime.now());
        cardRepository.save(card);

        log.info("Card blocked: **** {} by {}",
                card.getCardNumber().substring(12), username);

        notifyCardStatusChange(card, "BLOCKED");
        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  UNBLOCK CARD (Customer)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO unblockCard(Long cardId, String username) {

        DebitCard card = findCard(cardId, username);

        if (card.getStatus() != DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NOT_BLOCKED", "Card is not blocked.");
        }
        if (card.isExpired()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_EXPIRED",
                    "Card has expired. Request a replacement.");
        }

        card.setStatus(DebitCard.CardStatus.ACTIVE);
        card.setBlockReason(null);
        card.setBlockedAt(null);
        cardRepository.save(card);

        log.info("Card unblocked: **** {} by {}",
                card.getCardNumber().substring(12), username);

        notifyCardStatusChange(card, "ACTIVE");
        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  UPDATE LIMITS (Customer)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO updateLimits(
            Long cardId, UpdateLimitsRequestDTO req, String username) {

        DebitCard card = findCard(cardId, username);
        validateCardUsable(card);

        if (req.getOnlineLimit() != null) {
            BigDecimal ol = parseBD(req.getOnlineLimit(), "Online limit");
            if (ol.compareTo(BigDecimal.ZERO) <= 0 ||
                ol.compareTo(new BigDecimal("200000")) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT",
                        "Online limit must be ₹1 to ₹2,00,000.");
            }
            card.setOnlineLimit(ol);
        }
        if (req.getAtmLimit() != null) {
            BigDecimal al = parseBD(req.getAtmLimit(), "ATM limit");
            if (al.compareTo(BigDecimal.ZERO) <= 0 ||
                al.compareTo(new BigDecimal("50000")) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT", "ATM limit must be ₹1 to ₹50,000.");
            }
            card.setAtmLimit(al);
        }
        if (req.getDailyLimit() != null) {
            BigDecimal dl = parseBD(req.getDailyLimit(), "Daily limit");
            if (dl.compareTo(BigDecimal.ZERO) <= 0 ||
                dl.compareTo(new BigDecimal("500000")) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT", "Daily limit must be ₹1 to ₹5,00,000.");
            }
            card.setDailyLimit(dl);
        }

        cardRepository.save(card);
        log.info("Card limits updated: **** {} by {}",
                card.getCardNumber().substring(12), username);

        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  REQUEST REPLACEMENT (Customer)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO requestReplacement(
            ReplacementRequestDTO req, String username) {

        DebitCard card = findCard(Long.parseLong(req.getCardId()), username);

        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED", "This card is already cancelled.");
        }
        if (Boolean.TRUE.equals(card.getReplacementRequested())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "REPLACEMENT_PENDING",
                    "A replacement request is already in progress.");
        }
        if (req.getReason() == null || req.getReason().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "REASON_REQUIRED", "Replacement reason is required.");
        }

        card.setReplacementRequested(true);
        card.setReplacementReason(req.getReason().trim());
        card.setStatus(DebitCard.CardStatus.REPLACEMENT_PENDING);
        cardRepository.save(card);

        // Create replacement card with PENDING_APPROVAL (needs admin)
        createReplacementRequest(card);

        log.info("Replacement requested: **** {} by {}",
                card.getCardNumber().substring(12), username);

        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  SEND OTP FOR CARD-BANK TRANSFER
    // ─────────────────────────────────────────────

    public void sendCardTransferOtp(String cardNumber, String username) {
        // Validate card number format
        String cleaned = cardNumber.replace(" ", "");
        if (!cleaned.matches("\\d{16}")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_CARD", "Enter valid 16-digit card number.");
        }

        DebitCard card = cardRepository.findActiveCardByNumber(cleaned)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Active card not found."));

        if (!card.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied.");
        }

        validateCardUsable(card);

        otpService.sendOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_TRANSFER,
                "NeoBank — Card Transfer OTP",
                """
                Dear Customer,

                Your OTP for card transfer using card ****%s: {OTP}

                Valid for 10 minutes.
                ⚠ Do NOT share this with anyone.
                If you did not initiate this, block your card immediately.

                NeoBank Team
                """.formatted(cleaned.substring(12))
        );
    }

    // ─────────────────────────────────────────────
    //  CARD → BANK TRANSFER (new full flow)
    //  Validates full card details (number, name, expiry, CVV)
    //  Transfers to receiver account by account number + IFSC
    //  Requires OTP
    // ─────────────────────────────────────────────

    @Transactional
    public CardTransactionResponseDTO cardBankTransfer(
            CardBankTransferRequestDTO req, String username) {

        // ── 1. Clean card number ──
        String senderCardNum = req.getSenderCardNumber().replace(" ", "");
        if (!senderCardNum.matches("\\d{16}")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_CARD", "Enter valid 16-digit card number.");
        }

        // ── 2. Find and validate sender card ──
        DebitCard senderCard = cardRepository
                .findActiveCardByNumber(senderCardNum)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found or not active."));

        // Ownership
        if (!senderCard.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied.");
        }

        validateCardUsable(senderCard);

        // ── 3. Verify cardholder name ──
        if (!senderCard.getCardholderName()
                .equalsIgnoreCase(req.getSenderCardholderName().trim())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARDHOLDER_MISMATCH",
                    "Cardholder name does not match.");
        }

        // ── 4. Verify expiry MM/YY ──
        if (!verifyExpiry(req.getSenderExpiry(), senderCard.getExpiryDate())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "EXPIRY_MISMATCH",
                    "Card expiry date is incorrect.");
        }

        // ── 5. Verify CVV ──
//        if (!passwordEncoder.matches(
//                req.getSenderCvv().trim(), senderCard.getCvvHash())) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "CVV_MISMATCH",
//                    "CVV is incorrect.");
//        }
        
        if (!req.getSenderCvv().trim().equals(senderCard.getCvvHash())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CVV_MISMATCH",
                    "CVV is incorrect.");
        }

        // ── 6. Verify OTP ──
        otpService.verifyOtp(
                senderCard.getUser().getEmail(),
                OtpPurpose.CARD_TRANSFER,
                req.getOtp());

        // ── 7. Validate IFSC format ──
        if (!req.getReceiverIfsc().trim().toUpperCase()
                .matches("^[A-Z]{4}0[A-Z0-9]{6}$")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_IFSC",
                    "Invalid IFSC code. Example: SBIN0001234");
        }

        // ── 8. Find receiver account ──
        Account receiverAccount = accountRepository
                .findByAccountNumber(req.getReceiverAccountNumber().trim())
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "ACCOUNT_NOT_FOUND",
                        "Receiver account not found."));

        if (!receiverAccount.isOperable()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ACCOUNT_NOT_OPERABLE",
                    "Receiver account is not active.");
        }

        // Cannot transfer to own account
        Account senderAccount = senderCard.getAccount();
        if (senderAccount.getId().equals(receiverAccount.getId())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "SELF_TRANSFER",
                    "Cannot transfer to your own account.");
        }

        // ── 9. Amount validation ──
        BigDecimal amount = parseBD(req.getAmount(), "Amount");
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Amount must be > ₹0.");
        }

        // ── 10. Online limit check ──
        if (amount.compareTo(senderCard.getOnlineLimit()) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ONLINE_LIMIT_EXCEEDED",
                    "Amount ₹" + amount +
                    " exceeds online limit ₹" + senderCard.getOnlineLimit() + ".");
        }

        // ── 11. Daily limit check ──
        BigDecimal todaySpend = cardRepository.getTodaySpend(senderCard.getId());
        if (todaySpend.add(amount).compareTo(senderCard.getDailyLimit()) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "DAILY_LIMIT_EXCEEDED",
                    "Daily card limit exceeded. " +
                    "Used: ₹" + todaySpend +
                    " / Limit: ₹" + senderCard.getDailyLimit() + ".");
        }

        // ── 12. Balance check ──
        if (!senderAccount.hasSufficientBalance(amount)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INSUFFICIENT_BALANCE",
                    "Insufficient balance. Available: ₹" +
                    senderAccount.getAvailableBalance());
        }

        BigDecimal senderBefore   = senderAccount.getBalance();
        BigDecimal receiverBefore = receiverAccount.getBalance();

        // ── 13. Execute transfer ──
        senderAccount.setBalance(senderBefore.subtract(amount));
        receiverAccount.setBalance(receiverBefore.add(amount));
        senderAccount.recalculateAvailableBalance();
        receiverAccount.recalculateAvailableBalance();
        senderAccount.setLastTransactionAt(LocalDateTime.now());
        receiverAccount.setLastTransactionAt(LocalDateTime.now());
        accountRepository.save(senderAccount);
        accountRepository.save(receiverAccount);

        senderCard.setLastUsedAt(LocalDateTime.now());
        cardRepository.save(senderCard);

        // ── 14. Main Transaction record ──
        String txnRef = refGen.generate();

        Transaction txn = Transaction.builder()
                .referenceNumber(txnRef)
                .fromAccount(senderAccount)
                .toAccount(receiverAccount)
                .fromAccountNumber(senderAccount.getAccountNumber())
                .toAccountNumber(receiverAccount.getAccountNumber())
                .amount(amount)
                .netAmount(amount)
                .charges(BigDecimal.ZERO)
                .currency("INR")
                .transactionType(Transaction.TransactionType.CARD_TRANSFER)
                .transactionMode(Transaction.TransactionMode.ONLINE)
                .description(req.getDescription() != null
                        ? req.getDescription() : "Card Bank Transfer")
                .beneficiaryName(req.getReceiverName())
                .beneficiaryAccountNumber(req.getReceiverAccountNumber())
                .beneficiaryIfsc(req.getReceiverIfsc().toUpperCase())
                .fromBalanceBefore(senderBefore)
                .fromBalanceAfter(senderAccount.getBalance())
                .toBalanceBefore(receiverBefore)
                .toBalanceAfter(receiverAccount.getBalance())
                .status(Transaction.TransactionStatus.SUCCESS)
                .initiatedByUsername(username)
                .initiatedByRole(Transaction.InitiatedByRole.CUSTOMER)
                .processedAt(LocalDateTime.now())
                .build();

        transactionRepository.save(txn);

        // ── 15. CardTransaction record ──
        String cardTxnRef = "CTXN" + System.currentTimeMillis();

        CardTransaction cardTxn = CardTransaction.builder()
                .referenceNumber(cardTxnRef)
                .card(senderCard)
                .account(senderAccount)
                .amount(amount)
                .currency("INR")
                .transactionType(CardTransaction.CardTransactionType.CARD_BANK_TRANSFER)
                .merchantName("Bank Transfer via Card")
                .description(req.getDescription() != null
                        ? req.getDescription() : "Card Bank Transfer")
                .senderCardNumber(senderCardNum)
                .senderName(senderCard.getCardholderName())
                .receiverAccountNumber(req.getReceiverAccountNumber())
                .receiverIfsc(req.getReceiverIfsc().toUpperCase())
                .receiverName(req.getReceiverName())
                .status(CardTransaction.CardTxnStatus.SUCCESS)
                .balanceBefore(senderBefore)
                .balanceAfter(senderAccount.getBalance())
                .transactionRef(txnRef)
                .build();

        cardTxnRepository.save(cardTxn);

        log.info("Card-bank transfer: **** {} → account: {} ₹{} ref: {}",
                senderCardNum.substring(12),
                req.getReceiverAccountNumber(), amount, cardTxnRef);

        return buildCardTxnResponse(cardTxn);
    }

    // ─────────────────────────────────────────────
    //  GET CARD TRANSACTIONS (Customer)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<CardTransactionResponseDTO> getCardTransactions(
            Long cardId, String username, Pageable pageable) {

        DebitCard card = findCard(cardId, username);
        return cardTxnRepository
                .findByCardIdOrderByCreatedAtDesc(card.getId(), pageable)
                .map(this::buildCardTxnResponse);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: GET ALL CARDS
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<AdminCardResponseDTO> getAllCards(
            String filter, Pageable pageable) {

        Page<DebitCard> cards;

        if ("PENDING".equals(filter)) {
            cards = cardRepository.findByRequestStatusOrderByCreatedAtDesc(
                    DebitCard.CardRequestStatus.PENDING, pageable);
        } else if ("BLOCKED".equals(filter)) {
            cards = cardRepository.findByStatusOrderByCreatedAtDesc(
                    DebitCard.CardStatus.BLOCKED, pageable);
        } else {
            cards = cardRepository.findAllByOrderByCreatedAtDesc(pageable);
        }

        return cards.map(this::buildAdminResponse);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: APPROVE CARD REQUEST
    // ─────────────────────────────────────────────

    @Transactional
    public AdminCardResponseDTO approveCard(Long cardId, String adminUsername) {

        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));

        if (card.getRequestStatus() != DebitCard.CardRequestStatus.PENDING) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ALREADY_PROCESSED",
                    "Card request is already " +
                    card.getRequestStatus().name() + ".");
        }

        card.setRequestStatus(DebitCard.CardRequestStatus.APPROVED);
        card.setStatus(DebitCard.CardStatus.ACTIVE);
        card.setReviewedBy(adminUsername);
        card.setReviewedAt(LocalDateTime.now());
        card.setIssuedAt(LocalDateTime.now());
        cardRepository.save(card);

        log.info("Card APPROVED: **** {} by admin: {}",
                card.getCardNumber().substring(12), adminUsername);

        // Notify customer — send full card details via email
        notifyCardApproved(card);

        return buildAdminResponse(card);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: REJECT CARD REQUEST
    // ─────────────────────────────────────────────

    @Transactional
    public AdminCardResponseDTO rejectCard(
            Long cardId,
            AdminCardActionDTO req,
            String adminUsername) {

        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));

        if (card.getRequestStatus() != DebitCard.CardRequestStatus.PENDING) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ALREADY_PROCESSED",
                    "Card request is already " +
                    card.getRequestStatus().name() + ".");
        }

        if (req.getRejectionReason() == null || req.getRejectionReason().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "REASON_REQUIRED", "Rejection reason is required.");
        }

        card.setRequestStatus(DebitCard.CardRequestStatus.REJECTED);
        card.setStatus(DebitCard.CardStatus.CANCELLED);
        card.setRejectionReason(req.getRejectionReason().trim());
        card.setReviewedBy(adminUsername);
        card.setReviewedAt(LocalDateTime.now());
        cardRepository.save(card);

        log.info("Card REJECTED: **** {} reason: '{}' by admin: {}",
                card.getCardNumber().substring(12),
                req.getRejectionReason(), adminUsername);

        notifyCardRejected(card);
        return buildAdminResponse(card);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: BLOCK CARD (admin-initiated)
    // ─────────────────────────────────────────────

    @Transactional
    public AdminCardResponseDTO adminBlockCard(
            Long cardId, String reason, String adminUsername) {

        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));

        if (card.getStatus() == DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ALREADY_BLOCKED", "Card already blocked.");
        }

        card.setStatus(DebitCard.CardStatus.BLOCKED);
        card.setBlockReason("[Admin] " + (reason != null
                ? reason.trim() : "Blocked by admin"));
        card.setBlockedAt(LocalDateTime.now());
        cardRepository.save(card);

        notifyCardStatusChange(card, "BLOCKED");
        log.info("Card ADMIN-BLOCKED: **** {} by: {}",
                card.getCardNumber().substring(12), adminUsername);

        return buildAdminResponse(card);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: UNBLOCK CARD
    // ─────────────────────────────────────────────

    @Transactional
    public AdminCardResponseDTO adminUnblockCard(
            Long cardId, String adminUsername) {

        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));

        if (card.getStatus() != DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NOT_BLOCKED", "Card is not blocked.");
        }

        card.setStatus(DebitCard.CardStatus.ACTIVE);
        card.setBlockReason(null);
        card.setBlockedAt(null);
        cardRepository.save(card);

        notifyCardStatusChange(card, "ACTIVE");
        log.info("Card ADMIN-UNBLOCKED: **** {} by: {}",
                card.getCardNumber().substring(12), adminUsername);

        return buildAdminResponse(card);
    }

    // ─────────────────────────────────────────────
    //  PRIVATE HELPERS
    // ─────────────────────────────────────────────

    private boolean verifyExpiry(String input, LocalDate expiry) {
        // Input format: MM/YY
        try {
            String[] parts = input.trim().split("/");
            int month = Integer.parseInt(parts[0]);
            int year  = 2000 + Integer.parseInt(parts[1]);
            YearMonth inputYM  = YearMonth.of(year, month);
            YearMonth cardYM   = YearMonth.from(expiry);
            return inputYM.equals(cardYM);
        } catch (Exception e) {
            return false;
        }
    }

    private void createReplacementRequest(DebitCard oldCard) {
        try {
            String newCardNumber = cardNumberGenerator.generate();
            String rawCvv        = cardNumberGenerator.generateCvv();

            DebitCard newCard = DebitCard.builder()
                    .cardNumber(newCardNumber)
                    .account(oldCard.getAccount())
                    .user(oldCard.getUser())
                    .cardholderName(oldCard.getCardholderName())
                    .cvvHash(passwordEncoder.encode(rawCvv))
                    .expiryDate(LocalDate.now().plusYears(3))
                    .status(DebitCard.CardStatus.PENDING_APPROVAL)
                    .requestStatus(DebitCard.CardRequestStatus.PENDING)
                    .requestReason("Replacement — " + oldCard.getReplacementReason())
                    .pinSet(false)
                    .network(oldCard.getNetwork())
                    .onlineLimit(oldCard.getOnlineLimit())
                    .atmLimit(oldCard.getAtmLimit())
                    .dailyLimit(oldCard.getDailyLimit())
                    .replacementRequested(false)
                    .failedPinAttempts(0)
                    .cvvRevealCount(0)
                    .replacedByCardId(oldCard.getId())
                    .build();

            cardRepository.save(newCard);
            log.info("Replacement card request created: **** {} (replaces ****{})",
                    newCardNumber.substring(12),
                    oldCard.getCardNumber().substring(12));

        } catch (Exception e) {
            log.error("Replacement card creation failed: {}", e.getMessage());
        }
    }

    private void validateCardUsable(DebitCard card) {
        if (card.getRequestStatus() != DebitCard.CardRequestStatus.APPROVED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_NOT_APPROVED",
                    "Card is pending admin approval.");
        }
        if (card.getStatus() == DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_BLOCKED", "Card is blocked.");
        }
        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED", "Card is cancelled.");
        }
        if (card.getStatus() == DebitCard.CardStatus.EXPIRED ||
            card.isExpired()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_EXPIRED", "Card has expired.");
        }
    }

    private DebitCard findCard(Long cardId, String username) {
        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));
        if (!card.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied.");
        }
        return card;
    }

    private void validateOwnership(Account account, String username) {
        if (!account.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied.");
        }
    }

    private User findUser(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "USER_NOT_FOUND",
                        "User not found."));
    }

    private Account findAccount(String accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "ACCOUNT_NOT_FOUND",
                        "Account not found."));
    }

    private void validatePin(String pin, String confirm) {
        if (pin == null || !pin.matches("\\d{4}")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_PIN", "Card PIN must be exactly 4 digits.");
        }
        if (!pin.equals(confirm)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "PIN_MISMATCH", "PINs do not match.");
        }
    }

    private BigDecimal parseBD(String value, String field) {
        try {
            return new BigDecimal(value);
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_" + field.toUpperCase().replace(" ", "_"),
                    "Invalid " + field + ".");
        }
    }

    private String formatCardNumber(String cardNumber) {
        if (cardNumber == null || cardNumber.length() != 16) return cardNumber;
        return cardNumber.substring(0,4) + " " +
               cardNumber.substring(4,8) + " " +
               cardNumber.substring(8,12) + " " +
               cardNumber.substring(12);
    }

    private void sendCardDetailsEmail(DebitCard card) {
        try {
            // In production: AES-decrypt CVV and send
            // For demo: send card number only, CVV shown as "please check app"
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Card Details (Secure)",
                    """
                    Dear %s,

                    You requested to view your card details.
                    For security, CVV is shown only once during card approval.

                    Card Number : %s
                    Expiry      : %s
                    Network     : %s
                    Status      : %s

                    ⚠ Never share your card details with anyone.
                    ⚠ NeoBank will never ask for your CVV.

                    If this was not you, block your card immediately.

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            formatCardNumber(card.getCardNumber()),
                            card.getDisplayExpiry(),
                            card.getNetwork().name(),
                            card.getStatus().name())
            );
        } catch (Exception e) {
            log.warn("Card details email failed for ****{}",
                    card.getCardNumber().substring(12));
        }
    }

    private void notifyCardRequested(DebitCard card) {
        try {
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Card Request Submitted",
                    """
                    Dear %s,

                    Your debit card request has been submitted.

                    Card Type   : %s %s Debit Card
                    Linked A/C  : %s
                    Status      : PENDING ADMIN APPROVAL

                    We will notify you once your card is approved (1-2 business days).

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            card.getNetwork().name(),
                            card.getAccount().getAccountType().name(),
                            card.getAccount().getAccountNumber())
            );
        } catch (Exception ignored) {}
    }

    private void notifyCardApproved(DebitCard card) {
        try {
            // In production: physical card dispatched
            // For digital: send full card details ONCE via email
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Your Debit Card is Approved! 🎉",
                    """
                    Dear %s,

                    🎉 Your NeoBank debit card has been APPROVED!

                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    Card Number : %s
                    Expiry      : %s
                    Network     : %s
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                    ⚠ IMPORTANT SECURITY NOTES:
                    • Set your card PIN immediately through the app
                    • CVV was shown during card generation — if you need it,
                      use "View Card Details" in the app with OTP verification
                    • Never share your card details with anyone
                    • NeoBank will never ask for your PIN or CVV

                    Default Limits:
                    • Online: ₹25,000 / transaction
                    • ATM   : ₹10,000 / day
                    • Daily : ₹50,000 / day

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            formatCardNumber(card.getCardNumber()),
                            card.getDisplayExpiry(),
                            card.getNetwork().name())
            );
        } catch (Exception ignored) {}
    }

    private void notifyCardRejected(DebitCard card) {
        try {
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Card Request Update",
                    """
                    Dear %s,

                    Your debit card request has been reviewed.

                    Status : REJECTED
                    Reason : %s

                    You may submit a new card request after resolving the above.

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            card.getRejectionReason())
            );
        } catch (Exception ignored) {}
    }

    private void notifyCardStatusChange(DebitCard card, String status) {
        try {
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Card Status Update",
                    """
                    Dear %s,

                    Your card ****%s status has been changed to: %s

                    %s

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            card.getCardNumber().substring(12),
                            status,
                            "BLOCKED".equals(status)
                                ? "Reason: " + card.getBlockReason() +
                                  "\nIf this was not you, contact support."
                                : "Your card is now active and ready to use.")
            );
        } catch (Exception ignored) {}
    }

    public CardResponseDTO buildResponse(DebitCard c) {
        return CardResponseDTO.builder()
                .id(c.getId())
                .maskedCardNumber(c.getMaskedCardNumber())
                .last4(c.getCardNumber().substring(12))
                .cardholderName(c.getCardholderName())
                .expiryDisplay(c.getDisplayExpiry())
                .expiryDate(c.getExpiryDate() != null
                        ? c.getExpiryDate().toString() : null)
                .network(c.getNetwork().name())
                .status(c.getStatus().name())
                .requestStatus(c.getRequestStatus().name())
                .requestReason(c.getRequestReason())
                .rejectionReason(c.getRejectionReason())
                .blockReason(c.getBlockReason())
                .pinSet(c.getPinSet())
                .pinLocked(c.isPinLocked())
                .replacementRequested(c.getReplacementRequested())
                .replacementReason(c.getReplacementReason())
                .onlineLimit(c.getOnlineLimit().toPlainString())
                .atmLimit(c.getAtmLimit().toPlainString())
                .dailyLimit(c.getDailyLimit().toPlainString())
                .accountNumber(c.getAccount().getAccountNumber())
                .accountType(c.getAccount().getAccountType().name())
                .issuedAt(c.getIssuedAt() != null
                        ? c.getIssuedAt().format(FMT) : null)
                .lastUsedAt(c.getLastUsedAt() != null
                        ? c.getLastUsedAt().format(FMT) : null)
                .build();
    }

    public AdminCardResponseDTO buildAdminResponse(DebitCard c) {
        return AdminCardResponseDTO.builder()
                .id(c.getId())
                .maskedCardNumber(c.getMaskedCardNumber())
                .last4(c.getCardNumber().substring(12))
                .cardholderName(c.getCardholderName())
                .expiryDisplay(c.getDisplayExpiry())
                .network(c.getNetwork().name())
                .status(c.getStatus().name())
                .requestStatus(c.getRequestStatus().name())
                .requestReason(c.getRequestReason())
                .blockReason(c.getBlockReason())
                .rejectionReason(c.getRejectionReason())
                .reviewedBy(c.getReviewedBy())
                .reviewedAt(c.getReviewedAt() != null
                        ? c.getReviewedAt().format(FMT) : null)
                .pinSet(c.getPinSet())
                .onlineLimit(c.getOnlineLimit().toPlainString())
                .atmLimit(c.getAtmLimit().toPlainString())
                .dailyLimit(c.getDailyLimit().toPlainString())
                .accountNumber(c.getAccount().getAccountNumber())
                .accountType(c.getAccount().getAccountType().name())
                .customerUsername(c.getUser().getUsername())
                .customerFullName(c.getUser().getFullName())
                .customerEmail(c.getUser().getEmail())
                .customerPhone(c.getUser().getPhone())
                .issuedAt(c.getIssuedAt() != null
                        ? c.getIssuedAt().format(FMT) : null)
                .lastUsedAt(c.getLastUsedAt() != null
                        ? c.getLastUsedAt().format(FMT) : null)
                .createdAt(c.getCreatedAt() != null
                        ? c.getCreatedAt().format(FMT) : null)
                .build();
    }

    private CardTransactionResponseDTO buildCardTxnResponse(CardTransaction t) {
        return CardTransactionResponseDTO.builder()
                .id(t.getId())
                .referenceNumber(t.getReferenceNumber())
                .transactionType(t.getTransactionType().name())
                .merchantName(t.getMerchantName())
                .description(t.getDescription())
                .amount(t.getAmount().toPlainString())
                .currency(t.getCurrency())
                .status(t.getStatus().name())
                .beneficiaryName(t.getReceiverName())
                .beneficiaryCardNumber(t.getReceiverAccountNumber())
                .balanceBefore(t.getBalanceBefore() != null
                        ? t.getBalanceBefore().toPlainString() : null)
                .balanceAfter(t.getBalanceAfter() != null
                        ? t.getBalanceAfter().toPlainString() : null)
                .transactionRef(t.getTransactionRef())
                .createdAt(t.getCreatedAt() != null
                        ? t.getCreatedAt().format(FMT) : null)
                .build();
    }
}