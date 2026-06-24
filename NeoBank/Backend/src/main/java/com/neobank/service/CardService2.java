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
import java.time.format.DateTimeFormatter;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CardService2 {

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
    private static final DateTimeFormatter FMT_DATE =
            DateTimeFormatter.ofPattern("dd MMM yyyy");

    // ─────────────────────────────────────────────
    //  ISSUE NEW CARD (auto-issue on account creation
    //  OR explicit request)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO issueCard(
            IssueCardRequestDTO req, String username) {

        User    user    = findUser(username);
        Account account = findAccount(req.getAccountNumber());
        validateOwnership(account, username);

        if (!account.isOperable()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ACCOUNT_NOT_OPERABLE",
                    "Cannot issue card for a " +
                    account.getStatus().name() + " account.");
        }

        // Only 1 active card per account
        long activeCards = cardRepository
                .findByAccountIdAndStatusNotOrderByCreatedAtDesc(
                        account.getId(), DebitCard.CardStatus.CANCELLED)
                .stream()
                .filter(c -> c.getStatus() == DebitCard.CardStatus.ACTIVE ||
                             c.getStatus() == DebitCard.CardStatus.BLOCKED)
                .count();

        if (activeCards > 0) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "CARD_EXISTS",
                    "An active debit card already exists for this account. " +
                    "Please request a replacement instead.");
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

        // Generate card details
        String cardNumber = cardNumberGenerator.generate();
        String rawCvv     = cardNumberGenerator.generateCvv();
        String cvvHash    = passwordEncoder.encode(rawCvv);

        String cardholderName = user.getFullName() != null
                ? user.getFullName().toUpperCase()
                : user.getUsername().toUpperCase();

        DebitCard card = DebitCard.builder()
                .cardNumber(cardNumber)
                .account(account)
                .user(user)
                .cardholderName(cardholderName)
                .cvvHash(cvvHash)
                .expiryDate(LocalDate.now().plusYears(3))
                .status(DebitCard.CardStatus.ACTIVE)
                .pinSet(false)
                .network(network)
                .onlineLimit(new BigDecimal("25000"))
                .atmLimit(new BigDecimal("10000"))
                .dailyLimit(new BigDecimal("50000"))
                .replacementRequested(false)
                .failedPinAttempts(0)
                .issuedAt(LocalDateTime.now())
                .build();

        DebitCard saved = cardRepository.save(card);

        log.info("Card issued: **** {} account: {} network: {} user: {}",
                cardNumber.substring(12), account.getAccountNumber(),
                network, username);

        // Send card details to email (real banks do physical card)
        notifyCardIssued(saved, rawCvv);

        return buildResponse(saved);
    }

    // ─────────────────────────────────────────────
    //  GET MY CARDS
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
    //  BLOCK CARD
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
        card.setBlockReason(reason != null ? reason.trim()
                : "Blocked by cardholder");
        card.setBlockedAt(LocalDateTime.now());
        cardRepository.save(card);

        log.info("Card blocked: **** {} by {}", card.getCardNumber().substring(12), username);

        notifyCardStatusChange(card, "blocked");
        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  UNBLOCK CARD
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
                    "Cannot unblock an expired card. Request a replacement.");
        }

        card.setStatus(DebitCard.CardStatus.ACTIVE);
        card.setBlockReason(null);
        card.setBlockedAt(null);
        cardRepository.save(card);

        log.info("Card unblocked: **** {} by {}",
                card.getCardNumber().substring(12), username);

        notifyCardStatusChange(card, "unblocked");
        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  UPDATE TRANSACTION LIMITS
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO updateLimits(
            Long cardId,
            UpdateLimitsRequestDTO req,
            String username) {

        DebitCard card = findCard(cardId, username);
        validateCardOperable(card);

        BigDecimal maxOnline = new BigDecimal("200000"); // ₹2L
        BigDecimal maxAtm    = new BigDecimal("50000");  // ₹50K
        BigDecimal maxDaily  = new BigDecimal("500000"); // ₹5L

        if (req.getOnlineLimit() != null) {
            BigDecimal ol = parseBD(req.getOnlineLimit(), "Online limit");
            if (ol.compareTo(BigDecimal.ZERO) <= 0 ||
                ol.compareTo(maxOnline) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT",
                        "Online limit must be between ₹1 and ₹2,00,000.");
            }
            card.setOnlineLimit(ol);
        }

        if (req.getAtmLimit() != null) {
            BigDecimal al = parseBD(req.getAtmLimit(), "ATM limit");
            if (al.compareTo(BigDecimal.ZERO) <= 0 ||
                al.compareTo(maxAtm) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT",
                        "ATM limit must be between ₹1 and ₹50,000.");
            }
            card.setAtmLimit(al);
        }

        if (req.getDailyLimit() != null) {
            BigDecimal dl = parseBD(req.getDailyLimit(), "Daily limit");
            if (dl.compareTo(BigDecimal.ZERO) <= 0 ||
                dl.compareTo(maxDaily) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_LIMIT",
                        "Daily limit must be between ₹1 and ₹5,00,000.");
            }
            card.setDailyLimit(dl);
        }

        cardRepository.save(card);
        log.info("Card limits updated: **** {} by {}",
                card.getCardNumber().substring(12), username);

        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  SEND OTP FOR PIN SETUP
    // ─────────────────────────────────────────────

    public void sendPinSetupOtp(Long cardId, String username) {
        DebitCard card = findCard(cardId, username);
        validateCardOperable(card);

        otpService.sendOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_PIN_SETUP,
                "NeoBank — Card PIN Setup OTP",
                """
                Dear Customer,

                Your OTP to set card PIN for card ending ****%s: {OTP}

                Valid for 10 minutes.
                Do NOT share this OTP with anyone.

                NeoBank Team
                """.formatted(card.getCardNumber().substring(12))
        );
    }

    // ─────────────────────────────────────────────
    //  SET CARD PIN (with OTP verification)
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO setCardPin(
            SetCardPinRequestDTO req, String username) {

        DebitCard card = findCard(Long.parseLong(req.getCardId()), username);
        validateCardOperable(card);

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

        log.info("Card PIN set: **** {} by {}",
                card.getCardNumber().substring(12), username);
        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  REQUEST REPLACEMENT CARD
    // ─────────────────────────────────────────────

    @Transactional
    public CardResponseDTO requestReplacement(
            ReplacementRequestDTO req, String username) {

        DebitCard card = findCard(Long.parseLong(req.getCardId()), username);

        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED",
                    "This card is already cancelled.");
        }
        if (Boolean.TRUE.equals(card.getReplacementRequested())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "REPLACEMENT_PENDING",
                    "A replacement request is already in progress.");
        }
        if (req.getReason() == null || req.getReason().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "REASON_REQUIRED",
                    "Replacement reason is required.");
        }

        card.setReplacementRequested(true);
        card.setReplacementReason(req.getReason().trim());
        card.setStatus(DebitCard.CardStatus.REPLACEMENT_PENDING);
        cardRepository.save(card);

        // Auto-issue new card (in real life this would be physical delivery)
        issueReplacementCard(card, username);

        log.info("Replacement requested: **** {} reason: {} by {}",
                card.getCardNumber().substring(12), req.getReason(), username);

        return buildResponse(card);
    }

    // ─────────────────────────────────────────────
    //  GET CARD TRANSACTION HISTORY
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
    //  CARD TRANSFER (card → card payment)
    //  Flow:
    //  1. Validate sender card (number, PIN, status)
    //  2. Verify OTP
    //  3. Find beneficiary card / account
    //  4. Check limits (online limit + daily limit)
    //  5. Debit sender account
    //  6. Credit beneficiary account
    //  7. Save Transaction + CardTransaction records
    // ─────────────────────────────────────────────

    @Transactional
    public CardTransactionResponseDTO cardTransfer(
            CardTransferRequestDTO req, String username) {

        // ── 1. Find and validate sender card ──
        DebitCard senderCard = cardRepository
                .findByCardNumber(req.getSenderCardNumber())
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Sender card not found."));

        // Ownership check
        if (!senderCard.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied to this card.");
        }

        validateCardOperable(senderCard);

        if (!senderCard.getPinSet()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "PIN_NOT_SET",
                    "Please set your card PIN before making transfers.");
        }
        if (senderCard.isPinLocked()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "PIN_LOCKED",
                    "Card PIN is locked for 24 hours due to too many wrong attempts.");
        }

        // ── 2. Verify OTP ──
        otpService.verifyOtp(
                senderCard.getUser().getEmail(),
                OtpPurpose.CARD_TRANSFER,
                req.getOtp());

        // ── 3. Verify card PIN ──
        if (!passwordEncoder.matches(req.getCardPin(), senderCard.getPinHash())) {
            senderCard.incrementFailedPin();
            cardRepository.save(senderCard);
            int remaining = 3 - senderCard.getFailedPinAttempts();
            if (remaining <= 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "PIN_LOCKED",
                        "Card PIN locked for 24 hours.");
            }
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "WRONG_PIN",
                    "Wrong card PIN. " + remaining + " attempt(s) remaining.");
        }

        // ── 4. Find beneficiary card ──
        DebitCard benefCard = cardRepository
                .findByCardNumberAndStatus(
                        req.getBeneficiaryCardNumber(),
                        DebitCard.CardStatus.ACTIVE)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "BENEFICIARY_CARD_NOT_FOUND",
                        "Beneficiary card not found or not active."));

        // Cannot transfer to own card
        if (senderCard.getAccount().getId()
                      .equals(benefCard.getAccount().getId())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "SELF_TRANSFER",
                    "Cannot transfer to your own account.");
        }

        // ── 5. Amount validation ──
        BigDecimal amount = parseBD(req.getAmount(), "Amount");
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Amount must be > 0.");
        }

        // ── 6. Online limit check ──
        if (amount.compareTo(senderCard.getOnlineLimit()) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ONLINE_LIMIT_EXCEEDED",
                    "Amount exceeds online transaction limit of ₹" +
                    senderCard.getOnlineLimit() + ".");
        }

        // ── 7. Daily limit check ──
        BigDecimal todaySpend = cardRepository.getTodaySpend(senderCard.getId());
        if (todaySpend.add(amount).compareTo(senderCard.getDailyLimit()) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "DAILY_LIMIT_EXCEEDED",
                    "Daily card limit exceeded. " +
                    "Used: ₹" + todaySpend +
                    " / Limit: ₹" + senderCard.getDailyLimit() + ".");
        }

        // ── 8. Balance check ──
        Account fromAccount = senderCard.getAccount();
        Account toAccount   = benefCard.getAccount();

        if (!fromAccount.hasSufficientBalance(amount)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INSUFFICIENT_BALANCE",
                    "Insufficient balance. Available: ₹" +
                    fromAccount.getAvailableBalance());
        }

        BigDecimal fromBefore = fromAccount.getBalance();
        BigDecimal toBefore   = toAccount.getBalance();

        // ── 9. Execute transfer ──
        fromAccount.setBalance(fromBefore.subtract(amount));
        toAccount.setBalance(toBefore.add(amount));
        fromAccount.recalculateAvailableBalance();
        toAccount.recalculateAvailableBalance();
        fromAccount.setLastTransactionAt(LocalDateTime.now());
        toAccount.setLastTransactionAt(LocalDateTime.now());
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        // Reset PIN attempts on success
        senderCard.resetPinAttempts();
        senderCard.setLastUsedAt(LocalDateTime.now());
        cardRepository.save(senderCard);

        // ── 10. Save main Transaction record ──
        String txnRef = refGen.generate();

        Transaction txn = Transaction.builder()
                .referenceNumber(txnRef)
                .fromAccount(fromAccount)
                .toAccount(toAccount)
                .fromAccountNumber(fromAccount.getAccountNumber())
                .toAccountNumber(toAccount.getAccountNumber())
                .amount(amount)
                .netAmount(amount)
                .charges(BigDecimal.ZERO)
                .currency("INR")
                .transactionType(Transaction.TransactionType.CARD_TRANSFER)
                .transactionMode(Transaction.TransactionMode.ONLINE)
                .description(req.getDescription() != null
                        ? req.getDescription() : "Card Transfer")
                .beneficiaryName(benefCard.getCardholderName())
                .beneficiaryAccountNumber(toAccount.getAccountNumber())
                .fromBalanceBefore(fromBefore)
                .fromBalanceAfter(fromAccount.getBalance())
                .toBalanceBefore(toBefore)
                .toBalanceAfter(toAccount.getBalance())
                .status(Transaction.TransactionStatus.SUCCESS)
                .initiatedByUsername(username)
                .initiatedByRole(Transaction.InitiatedByRole.CUSTOMER)
                .processedAt(LocalDateTime.now())
                .build();

        transactionRepository.save(txn);

        // ── 11. Save CardTransaction record ──
        String cardTxnRef = "CTXN" + System.currentTimeMillis();

        CardTransaction cardTxn = CardTransaction.builder()
                .referenceNumber(cardTxnRef)
                .card(senderCard)
                .account(fromAccount)
                .amount(amount)
                .currency("INR")
                .transactionType(CardTransaction.CardTransactionType.CARD_TRANSFER)
                .merchantName("NeoBank Card Transfer")
                .description(req.getDescription() != null
                        ? req.getDescription() : "Card Transfer")
                .beneficiaryCardNumber(maskCardNumber(req.getBeneficiaryCardNumber()))
                .beneficiaryAccountNumber(toAccount.getAccountNumber())
                .beneficiaryName(benefCard.getCardholderName())
                .status(CardTransaction.CardTxnStatus.SUCCESS)
                .balanceBefore(fromBefore)
                .balanceAfter(fromAccount.getBalance())
                .transactionRef(txnRef)
                .build();

        cardTxnRepository.save(cardTxn);

        log.info("Card transfer: **** {} → **** {} ₹{} ref: {}",
                senderCard.getCardNumber().substring(12),
                benefCard.getCardNumber().substring(12),
                amount, cardTxnRef);

        return buildCardTxnResponse(cardTxn);
    }

    // ─────────────────────────────────────────────
    //  SEND OTP FOR CARD TRANSFER
    // ─────────────────────────────────────────────

    public void sendCardTransferOtp(String cardNumber, String username) {
        DebitCard card = cardRepository.findByCardNumber(cardNumber)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));

        if (!card.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied.");
        }
        validateCardOperable(card);

        otpService.sendOtp(
                card.getUser().getEmail(),
                OtpPurpose.CARD_TRANSFER,
                "NeoBank — Card Transfer OTP",
                """
                Dear Customer,

                Your OTP for card transfer using card ****%s: {OTP}

                Valid for 10 minutes.
                Do NOT share this OTP with anyone.

                If you did not initiate this transfer, block your card immediately.

                NeoBank Team
                """.formatted(card.getCardNumber().substring(12))
        );
    }

    // ─────────────────────────────────────────────
    //  PRIVATE HELPERS
    // ─────────────────────────────────────────────

    private void issueReplacementCard(DebitCard oldCard, String username) {
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
                    .status(DebitCard.CardStatus.ACTIVE)
                    .pinSet(false)
                    .network(oldCard.getNetwork())
                    .onlineLimit(oldCard.getOnlineLimit())
                    .atmLimit(oldCard.getAtmLimit())
                    .dailyLimit(oldCard.getDailyLimit())
                    .replacementRequested(false)
                    .failedPinAttempts(0)
                    .replacedByCardId(oldCard.getId())
                    .issuedAt(LocalDateTime.now())
                    .build();

            cardRepository.save(newCard);

            // Cancel old card
            oldCard.setStatus(DebitCard.CardStatus.CANCELLED);
            cardRepository.save(oldCard);

            log.info("Replacement card issued: **** {} (replaced ****{})",
                    newCardNumber.substring(12),
                    oldCard.getCardNumber().substring(12));

            notifyCardIssued(newCard, rawCvv);

        } catch (Exception e) {
            log.error("Replacement card issuance failed: {}", e.getMessage());
        }
    }

    private DebitCard findCard(Long cardId, String username) {
        DebitCard card = cardRepository.findById(cardId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "CARD_NOT_FOUND",
                        "Card not found."));
        if (!card.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied to this card.");
        }
        return card;
    }

    private void validateCardOperable(DebitCard card) {
        if (card.getStatus() == DebitCard.CardStatus.BLOCKED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_BLOCKED",
                    "Card is blocked. Unblock it to continue.");
        }
        if (card.getStatus() == DebitCard.CardStatus.CANCELLED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_CANCELLED", "Card is permanently cancelled.");
        }
        if (card.getStatus() == DebitCard.CardStatus.EXPIRED ||
            card.isExpired()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "CARD_EXPIRED",
                    "Card has expired. Request a replacement.");
        }
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

    private BigDecimal parseBD(String value, String field) {
        try {
            return new BigDecimal(value);
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_" + field.toUpperCase().replace(" ", "_"),
                    "Invalid " + field + ".");
        }
    }

    private String maskCardNumber(String cardNumber) {
        if (cardNumber == null || cardNumber.length() != 16) return "****";
        return "**** **** **** " + cardNumber.substring(12);
    }

    private void notifyCardIssued(DebitCard card, String rawCvv) {
        try {
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Your New Debit Card is Ready",
                    """
                    Dear %s,

                    Your NeoBank %s Debit Card has been issued.

                    Card Number : **** **** **** %s
                    Expiry      : %s
                    CVV         : %s
                    Network     : %s

                    ⚠ Please set your card PIN immediately through the app.
                    ⚠ Do NOT share your CVV or PIN with anyone.

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            card.getNetwork().name(),
                            card.getCardNumber().substring(12),
                            card.getDisplayExpiry(),
                            rawCvv,
                            card.getNetwork().name())
            );
        } catch (Exception e) {
            log.warn("Card issued notification failed for card {}",
                    card.getCardNumber().substring(12));
        }
    }

    private void notifyCardStatusChange(DebitCard card, String action) {
        try {
            mailService.sendMail(
                    card.getUser().getEmail(),
                    "NeoBank — Card " + action.toUpperCase(),
                    """
                    Dear %s,

                    Your card ending ****%s has been %s.

                    %s

                    If this was not you, contact support immediately.

                    NeoBank Team
                    """.formatted(
                            card.getCardholderName(),
                            card.getCardNumber().substring(12),
                            action,
                            action.equals("blocked")
                                ? "Reason: " + card.getBlockReason()
                                : "Your card is now active and ready to use.")
            );
        } catch (Exception e) {
            log.warn("Card status notification failed for ****{}",
                    card.getCardNumber().substring(12));
        }
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
                .beneficiaryName(t.getBeneficiaryName())
                .beneficiaryCardNumber(t.getBeneficiaryCardNumber())
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