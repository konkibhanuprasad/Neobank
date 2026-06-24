// src/main/java/com/neobank/service/LoanService.java

package com.neobank.service;

import com.neobank.dto.loan.*;
import com.neobank.entity.*;
import com.neobank.exception.NeoBankException;
import com.neobank.repository.*;
import com.neobank.util.LoanIdGenerator;
import com.neobank.util.TransactionReferenceGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class LoanService {

    // ── ONE declaration of each — no duplicates ──
    private final LoanRepository                loanRepository;
    private final LoanEmiRepository             loanEmiRepository;
    private final UserRepository                userRepository;
    private final AccountRepository             accountRepository;
    private final TransactionRepository         transactionRepository;
    private final TreasuryRepository            treasuryRepository;
    private final TreasuryService               treasuryService;
    private final LoanIdGenerator               loanIdGenerator;
    private final TransactionReferenceGenerator refGen;
    private final MailService                   mailService;
    
 // ── ADD to LoanService injections ──
    private final LoanProductService    loanProductService;
    private final LoanProductRepository loanProductRepository;

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd MMM yyyy");
    private static final DateTimeFormatter FMT_FULL =
            DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");

    // ─────────────────────────────────────────────
    //  EMI CALCULATOR (public — no auth needed)
    // ─────────────────────────────────────────────

    public EmiCalculatorResponseDTO calculateEmi(EmiCalculatorRequestDTO req) {

        BigDecimal principal  = parseBD(req.getPrincipal(),  "Principal");
        BigDecimal annualRate = parseBD(req.getAnnualRate(), "Annual rate");
        int        tenure     = req.getTenureMonths();

        if (principal.compareTo(BigDecimal.ZERO) <= 0)
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Principal must be > 0.");
        if (annualRate.compareTo(BigDecimal.ZERO) <= 0)
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_RATE", "Interest rate must be > 0.");
        if (tenure <= 0 || tenure > 360)
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_TENURE", "Tenure must be 1–360 months.");

        BigDecimal emi          = computeEmi(principal, annualRate, tenure);
        BigDecimal totalPayable = emi
                .multiply(BigDecimal.valueOf(tenure))
                .setScale(2, RoundingMode.HALF_UP);
        BigDecimal totalInterest = totalPayable
                .subtract(principal)
                .setScale(2, RoundingMode.HALF_UP);

        return EmiCalculatorResponseDTO.builder()
                .principal(principal.toPlainString())
                .annualRate(annualRate.toPlainString())
                .tenureMonths(tenure)
                .emiAmount(emi.toPlainString())
                .totalPayable(totalPayable.toPlainString())
                .totalInterest(totalInterest.toPlainString())
                .build();
    }

    // ─────────────────────────────────────────────
    //  APPLY FOR LOAN
    // ─────────────────────────────────────────────

//    @Transactional
//    public LoanResponseDTO applyLoan(
//            LoanApplicationRequestDTO req,
//            MultipartFile incomeProof,
//            MultipartFile addressProof,
//            MultipartFile propertyDoc,
//            MultipartFile vehicleDoc,
//            MultipartFile bankStatement,
//            String username) throws Exception {
//
//        User user = findUser(username);
//
//        // Validate loan type
//        Loan.LoanType loanType;
//        try {
//            loanType = Loan.LoanType.valueOf(req.getLoanType().toUpperCase());
//        } catch (Exception e) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST, "INVALID_TYPE",
//                    "Loan type must be HOME, PERSONAL, VEHICLE, or EDUCATION.");
//        }
//
//        // Validate amount
//        BigDecimal amount = parseBD(req.getPrincipalAmount(), "Loan amount");
//        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "INVALID_AMOUNT", "Loan amount must be > 0.");
//        }
//        if (amount.compareTo(new BigDecimal("50000000")) > 0) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "AMOUNT_TOO_HIGH",
//                    "Maximum loan amount is ₹5,00,00,000.");
//        }
//
//        // Validate tenure
//        if (req.getTenureMonths() == null ||
//            req.getTenureMonths() <= 0 ||
//            req.getTenureMonths() > 360) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "INVALID_TENURE", "Tenure must be 1–360 months.");
//        }
//
//        // Account for EMI deduction
//        Account account = findAccount(req.getAccountNumber());
//        validateOwnership(account, username);
//
//        if (!account.isOperable()) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "ACCOUNT_NOT_OPERABLE",
//                    "Account " + account.getAccountNumber() +
//                    " is " + account.getStatus().name() +
//                    ". EMIs cannot be deducted from this account.");
//        }
//
//        // Only one PENDING loan at a time
//        boolean hasPending = loanRepository.existsByUserIdAndStatusIn(
//                user.getId(), List.of(Loan.LoanStatus.PENDING));
//        if (hasPending) {
//            throw new NeoBankException(HttpStatus.CONFLICT, "PENDING_LOAN",
//                    "You already have a loan application under review. " +
//                    "Please wait for its decision before applying again.");
//        }
//
//        // Income proof is mandatory
//        if (incomeProof == null || incomeProof.isEmpty()) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "MISSING_DOC", "Income proof document is required.");
//        }
//
//        // HOME loan requires property doc, VEHICLE requires vehicle doc
//        if (loanType == Loan.LoanType.HOME &&
//            (propertyDoc == null || propertyDoc.isEmpty())) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "MISSING_DOC",
//                    "Property document is required for Home Loan.");
//        }
//        if (loanType == Loan.LoanType.VEHICLE &&
//            (vehicleDoc == null || vehicleDoc.isEmpty())) {
//            throw new NeoBankException(HttpStatus.BAD_REQUEST,
//                    "MISSING_DOC",
//                    "Vehicle document is required for Vehicle Loan.");
//        }
//
//        Loan loan = Loan.builder()
//                .loanId(loanIdGenerator.generate())
//                .user(user)
//                .account(account)
//                .loanType(loanType)
//                .principalAmount(amount)
//                .tenureMonths(req.getTenureMonths())
//                .purpose(req.getPurpose())
//                .status(Loan.LoanStatus.PENDING)
//                .outstandingBalance(amount)
//                .emisPaid(0)
//                .emisOverdue(0)
//                .foreclosureRequested(false)
//                .build();
//
//        // Attach documents
//        if (incomeProof  != null && !incomeProof.isEmpty()) {
//            loan.setIncomeProof(incomeProof.getBytes());
//            loan.setIncomeProofType(incomeProof.getContentType());
//        }
//        if (addressProof != null && !addressProof.isEmpty()) {
//            loan.setAddressProof(addressProof.getBytes());
//            loan.setAddressProofType(addressProof.getContentType());
//        }
//        if (propertyDoc  != null && !propertyDoc.isEmpty()) {
//            loan.setPropertyDoc(propertyDoc.getBytes());
//            loan.setPropertyDocType(propertyDoc.getContentType());
//        }
//        if (vehicleDoc   != null && !vehicleDoc.isEmpty()) {
//            loan.setVehicleDoc(vehicleDoc.getBytes());
//            loan.setVehicleDocType(vehicleDoc.getContentType());
//        }
//        if (bankStatement != null && !bankStatement.isEmpty()) {
//            loan.setBankStatement(bankStatement.getBytes());
//            loan.setBankStatementType(bankStatement.getContentType());
//        }
//
//        Loan saved = loanRepository.save(loan);
//        log.info("Loan applied: {} {} ₹{} by {}",
//                saved.getLoanId(), loanType, amount, username);
//
//        notifyLoanStatus(saved, "submitted");
//        return buildResponse(saved, false);
//    }

    // ─────────────────────────────────────────────
    //  MY LOANS
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<LoanResponseDTO> getMyLoans(String username) {
        User user = findUser(username);
        return loanRepository
                .findByUserIdOrderByCreatedAtDesc(user.getId())
                .stream().map(l -> buildResponse(l, false)).toList();
    }

    // ─────────────────────────────────────────────
    //  GET EMI SCHEDULE
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<LoanEmiResponseDTO> getEmiSchedule(
            String loanId, String username) {

        Loan loan = findLoanByLoanId(loanId);
        validateLoanOwnership(loan, username);
        return loanEmiRepository
                .findByLoanIdOrderByEmiNumberAsc(loan.getId())
                .stream().map(this::buildEmiResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  FORECLOSURE REQUEST (by customer)
    // ─────────────────────────────────────────────

    @Transactional
    public LoanResponseDTO requestForeclosure(
            String loanId, String username) {

        Loan loan = findLoanByLoanId(loanId);
        validateLoanOwnership(loan, username);

        if (loan.getStatus() != Loan.LoanStatus.APPROVED &&
            loan.getStatus() != Loan.LoanStatus.OVERDUE) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_STATUS",
                    "Foreclosure can only be requested for active (APPROVED/OVERDUE) loans.");
        }
        if (Boolean.TRUE.equals(loan.getForeclosureRequested())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "ALREADY_REQUESTED",
                    "Foreclosure already requested. Awaiting admin review.");
        }

        // Foreclosure amount = outstanding balance + 2% penalty charge
        BigDecimal outstanding    = loan.getOutstandingBalance();
        BigDecimal charge         = outstanding
                .multiply(new BigDecimal("0.02"))
                .setScale(2, RoundingMode.HALF_UP);
        BigDecimal foreclosureAmt = outstanding.add(charge);

        loan.setForeclosureRequested(true);
        loan.setForeclosureAmount(foreclosureAmt);
        loanRepository.save(loan);

        log.info("Foreclosure requested: {} outstanding: ₹{} charge: ₹{} total: ₹{} by {}",
                loanId, outstanding, charge, foreclosureAmt, username);
        return buildResponse(loan, false);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: GET ALL LOANS
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<LoanResponseDTO> getAllLoans(
            String status, Pageable pageable) {

        if (status != null && !status.isBlank()) {
            try {
                Loan.LoanStatus ls =
                        Loan.LoanStatus.valueOf(status.toUpperCase());
                return loanRepository
                        .findByStatusOrderByCreatedAtDesc(ls, pageable)
                        .map(l -> buildResponse(l, false));
            } catch (Exception ignored) {}
        }
        return loanRepository
                .findAllByOrderByCreatedAtDesc(pageable)
                .map(l -> buildResponse(l, false));
    }

    // ─────────────────────────────────────────────
    //  ADMIN: GET LOAN DETAIL (with docs)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public LoanResponseDTO getLoanDetail(String loanId) {
        return buildResponse(findLoanByLoanId(loanId), true);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: APPROVE LOAN
    //  Flow:
    //  1. Validate interest rate
    //  2. Resolve + validate treasury
    //  3. Check treasury has sufficient funds
    //  4. Calculate EMI + schedule dates
    //  5. Debit treasury
    //  6. Credit customer account
    //  7. Save LOAN_DISBURSEMENT transaction
    //  8. Generate EMI schedule rows
    //  9. Notify customer by email
    // ─────────────────────────────────────────────

    @Transactional
    public LoanResponseDTO approveLoan(
            String loanId,
            ApproveLoanRequestDTO req,
            String adminUsername) {

        Loan loan = findLoanByLoanId(loanId);

        if (loan.getStatus() != Loan.LoanStatus.PENDING) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_STATUS",
                    "Only PENDING loans can be approved. " +
                    "Current status: " + loan.getStatus().name());
        }

        // ── 1. Validate interest rate ──
        BigDecimal interestRate = parseBD(req.getInterestRate(), "Interest rate");
        if (interestRate.compareTo(BigDecimal.ZERO) <= 0 ||
            interestRate.compareTo(new BigDecimal("50")) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_RATE",
                    "Interest rate must be between 0.1% and 50%.");
        }

        // ── 2. Resolve treasury ──
        Treasury treasury;
        if (req.getTreasuryId() != null) {
            treasury = treasuryService.findById(req.getTreasuryId());
            if (treasury.getStatus() != Treasury.TreasuryStatus.ACTIVE) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "TREASURY_NOT_ACTIVE",
                        "Selected treasury '" + treasury.getName() +
                        "' is " + treasury.getStatus().name() +
                        ". Choose an ACTIVE treasury.");
            }
        } else {
            // Fall back to first active treasury
            treasury = treasuryService.findFirstActive();
        }

        BigDecimal principal = loan.getPrincipalAmount();
        int        tenure    = loan.getTenureMonths();

        // ── 3. Treasury sufficient funds check ──
        if (!treasury.hasSufficientFunds(principal)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "TREASURY_INSUFFICIENT_FUNDS",
                    "Treasury '" + treasury.getName() +
                    "' has insufficient funds. " +
                    "Available: ₹" + treasury.getBalance() +
                    " / Required: ₹" + principal +
                    ". Please top up the treasury first.");
        }

        // ── 4. Calculate EMI and dates ──
        BigDecimal emi          = computeEmi(principal, interestRate, tenure);
        BigDecimal totalPayable = emi
                .multiply(BigDecimal.valueOf(tenure))
                .setScale(2, RoundingMode.HALF_UP);
        BigDecimal totalInterest = totalPayable
                .subtract(principal)
                .setScale(2, RoundingMode.HALF_UP);

        LocalDate disbursementDate = LocalDate.now();
        LocalDate firstEmiDate     = disbursementDate.plusMonths(1);
        LocalDate maturityDate     = disbursementDate.plusMonths(tenure);

        // ── 5. Debit treasury ──
        treasury.disburse(principal);   // throws if insufficient (double-check)
        treasuryRepository.save(treasury);
        log.info("Treasury [{}] debited ₹{} for loan {}",
                treasury.getTreasuryCode(), principal, loanId);

        // ── 6. Credit customer account ──
        Account account        = loan.getAccount();
        BigDecimal balBefore   = account.getBalance();

        account.setBalance(balBefore.add(principal));
        account.recalculateAvailableBalance();
        account.setLastTransactionAt(LocalDateTime.now());
        accountRepository.save(account);
        log.info("Customer account [{}] credited ₹{} (loan disbursement)",
                account.getAccountNumber(), principal);

        // ── 7. Create LOAN_DISBURSEMENT transaction record ──
        String txnRef = refGen.generate();

        Transaction disbursementTxn = Transaction.builder()
                .referenceNumber(txnRef)
                .toAccount(account)
                .toAccountNumber(account.getAccountNumber())
                .amount(principal)
                .netAmount(principal)
                .charges(BigDecimal.ZERO)
                .currency("INR")
                .transactionType(Transaction.TransactionType.LOAN_DISBURSEMENT)
                .transactionMode(Transaction.TransactionMode.SYSTEM)
                .description("Loan Disbursement | " +
                             loan.getLoanId() +
                             " | Treasury: " + treasury.getName())
                .toBalanceBefore(balBefore)
                .toBalanceAfter(account.getBalance())
                .status(Transaction.TransactionStatus.SUCCESS)
                .initiatedByUsername(adminUsername)
                .initiatedByRole(Transaction.InitiatedByRole.ADMIN)
                .processedAt(LocalDateTime.now())
                .build();

        transactionRepository.save(disbursementTxn);

        // ── Update loan fields ──
        loan.setInterestRate(interestRate);
        loan.setEmiAmount(emi);
        loan.setTotalInterest(totalInterest);
        loan.setTotalPayable(totalPayable);
        loan.setOutstandingBalance(totalPayable);
        loan.setDisbursementDate(disbursementDate);
        loan.setNextEmiDate(firstEmiDate);
        loan.setMaturityDate(maturityDate);
        loan.setStatus(Loan.LoanStatus.APPROVED);
        loan.setReviewedBy(adminUsername);
        loan.setReviewedAt(LocalDateTime.now());
        loan.setTreasury(treasury);
        loanRepository.save(loan);

        // ── 8. Generate EMI schedule ──
        generateEmiSchedule(loan);

        log.info("Loan APPROVED: {} @ {}% p.a. | treasury: {} | disbursement txn: {} | by: {}",
                loanId, interestRate,
                treasury.getTreasuryCode(), txnRef, adminUsername);

        notifyLoanStatus(loan, "approved");
        return buildResponse(loan, false);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: REJECT LOAN
    // ─────────────────────────────────────────────

    @Transactional
    public LoanResponseDTO rejectLoan(
            String loanId,
            RejectLoanRequestDTO req,
            String adminUsername) {

        Loan loan = findLoanByLoanId(loanId);

        if (loan.getStatus() != Loan.LoanStatus.PENDING) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_STATUS",
                    "Only PENDING loans can be rejected. " +
                    "Current status: " + loan.getStatus().name());
        }
        if (req.getReason() == null || req.getReason().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "REASON_REQUIRED",
                    "Rejection reason is required.");
        }

        loan.setStatus(Loan.LoanStatus.REJECTED);
        loan.setRejectionReason(req.getReason().trim());
        loan.setReviewedBy(adminUsername);
        loan.setReviewedAt(LocalDateTime.now());
        loanRepository.save(loan);

        log.info("Loan REJECTED: {} reason: '{}' by: {}",
                loanId, req.getReason(), adminUsername);

        notifyLoanStatus(loan, "rejected");
        return buildResponse(loan, false);
    }

    // ─────────────────────────────────────────────
    //  ADMIN: APPROVE FORECLOSURE — FIXED
    //  Flow:
    //  1. Validate foreclosure request exists
    //  2. Validate loan is active (APPROVED or OVERDUE)
    //  3. Check customer account has enough balance
    //  4. Debit customer account (foreclosure amount)
    //  5. Credit treasury (outstanding principal back)
    //     Interest on foreclosure penalty also to treasury
    //  6. Create FORECLOSURE transaction record
    //  7. Mark remaining EMIs as WAIVED
    //  8. Close the loan
    // ─────────────────────────────────────────────

    @Transactional
    public LoanResponseDTO approveForeclosure(
            String loanId, String adminUsername) {

        Loan loan = findLoanByLoanId(loanId);

        // ── 1. Validate foreclosure request ──
        if (!Boolean.TRUE.equals(loan.getForeclosureRequested())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NO_FORECLOSURE",
                    "No foreclosure request found for loan: " + loanId);
        }

        // ── 2. Validate loan is still active ──
        if (loan.getStatus() != Loan.LoanStatus.APPROVED &&
            loan.getStatus() != Loan.LoanStatus.OVERDUE) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_STATUS",
                    "Foreclosure can only be approved for APPROVED or OVERDUE loans. " +
                    "Current status: " + loan.getStatus().name());
        }

        // ── 3. Validate treasury is linked ──
        Treasury treasury = loan.getTreasury();
        if (treasury == null) {
            throw new NeoBankException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "NO_TREASURY",
                    "Loan has no linked treasury. Cannot process foreclosure.");
        }

        Account    account          = loan.getAccount();
        BigDecimal foreclosureAmt   = loan.getForeclosureAmount();
        BigDecimal outstandingPrinc = loan.getOutstandingBalance();

        // Penalty = foreclosureAmt - outstandingBalance (the 2% charge)
        BigDecimal penaltyAmt = foreclosureAmt
                .subtract(outstandingPrinc)
                .max(BigDecimal.ZERO);

        // ── 4. Check customer has enough balance ──
        if (!account.hasSufficientBalance(foreclosureAmt)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INSUFFICIENT_BALANCE",
                    "Account [" + account.getAccountNumber() +
                    "] has insufficient balance for foreclosure. " +
                    "Required: ₹" + foreclosureAmt +
                    " | Available: ₹" + account.getAvailableBalance());
        }

        BigDecimal custBalBefore = account.getBalance();

        // ── 5. Debit customer account ──
        account.setBalance(custBalBefore.subtract(foreclosureAmt));
        account.recalculateAvailableBalance();
        account.setLastTransactionAt(LocalDateTime.now());
        accountRepository.save(account);           // ← was MISSING before (bug fixed)

        log.info("Customer account [{}] debited ₹{} for foreclosure of loan {}",
                account.getAccountNumber(), foreclosureAmt, loanId);

        // ── 6. Credit treasury ──
        // Principal portion goes back into treasury pool
        // Penalty portion is profit (like interest)
        treasury.receive(outstandingPrinc, penaltyAmt);
        treasuryRepository.save(treasury);

        log.info("Treasury [{}] credited ₹{} principal + ₹{} penalty for foreclosure of loan {}",
                treasury.getTreasuryCode(),
                outstandingPrinc, penaltyAmt, loanId);

        // ── 7. Create FORECLOSURE transaction record ──
        String fcTxnRef = refGen.generate();

        Transaction foreclosureTxn = Transaction.builder()
                .referenceNumber(fcTxnRef)
                .fromAccount(account)
                .fromAccountNumber(account.getAccountNumber())
                .amount(foreclosureAmt)
                .netAmount(foreclosureAmt)
                .charges(penaltyAmt)     // 2% penalty shown as charges
                .currency("INR")
                .transactionType(Transaction.TransactionType.LOAN_FORECLOSURE)
                .transactionMode(Transaction.TransactionMode.SYSTEM)
                .description("Loan Foreclosure | " +
                             loan.getLoanId() +
                             " | Outstanding: ₹" + outstandingPrinc +
                             " + Penalty: ₹" + penaltyAmt)
                .fromBalanceBefore(custBalBefore)
                .fromBalanceAfter(account.getBalance())
                .status(Transaction.TransactionStatus.SUCCESS)
                .initiatedByUsername(adminUsername)
                .initiatedByRole(Transaction.InitiatedByRole.ADMIN)
                .processedAt(LocalDateTime.now())
                .build();

        transactionRepository.save(foreclosureTxn);

        // ── 8. Mark remaining EMIs as WAIVED ──
        List<LoanEmi> pendingEmis = loanEmiRepository
                .findByLoanIdOrderByEmiNumberAsc(loan.getId())
                .stream()
                .filter(e -> e.getStatus() == LoanEmi.EmiStatus.PENDING ||
                             e.getStatus() == LoanEmi.EmiStatus.OVERDUE)
                .toList();

        pendingEmis.forEach(e -> {
            e.setStatus(LoanEmi.EmiStatus.WAIVED);
            loanEmiRepository.save(e);
        });
        log.info("Waived {} remaining EMIs for foreclosed loan {}",
                pendingEmis.size(), loanId);

        // ── 9. Close the loan ──
        loan.setStatus(Loan.LoanStatus.FORECLOSED);
        loan.setOutstandingBalance(BigDecimal.ZERO);
        loan.setForeclosedAt(LocalDateTime.now());
        loan.setReviewedBy(adminUsername);
        loan.setReviewedAt(LocalDateTime.now());
        loanRepository.save(loan);

        log.info("Loan FORECLOSED: {} | txnRef: {} | by: {}",
                loanId, fcTxnRef, adminUsername);

        return buildResponse(loan, false);
    }

    // ─────────────────────────────────────────────
    //  EMI AUTO-DEBIT (called by scheduler at 8AM)
    //  Flow per EMI:
    //  1. Check balance → if not enough → OVERDUE
    //  2. Debit customer account
    //  3. Credit treasury (principal + interest)
    //  4. Create EMI_DEDUCTION transaction record
    //  5. Update EMI row → PAID
    //  6. Update loan outstanding balance + next EMI date
    //  7. If all EMIs paid → CLOSED
    // ─────────────────────────────────────────────

    @Transactional
    public void processEmiDeductions() {

        // findDueAndOverdue gets PENDING EMIs where dueDate <= today
        // This retries overdue EMIs too every day until paid
        List<LoanEmi> dueTodayAndOverdue =
                loanEmiRepository.findDueAndOverdue(LocalDate.now());

        log.info("EMI scheduler: processing {} EMIs", dueTodayAndOverdue.size());

        for (LoanEmi emi : dueTodayAndOverdue) {

            Loan     loan     = emi.getLoan();
            Account  account  = loan.getAccount();
            Treasury treasury = loan.getTreasury();

            // Skip if loan not in active state
            if (loan.getStatus() == Loan.LoanStatus.CLOSED     ||
                loan.getStatus() == Loan.LoanStatus.FORECLOSED ||
                loan.getStatus() == Loan.LoanStatus.REJECTED) {
                log.warn("EMI skipped — loan {} status is {}",
                        loan.getLoanId(), loan.getStatus());
                continue;
            }

            try {
                BigDecimal emiAmt = emi.getEmiAmount();

                // ── 1. Check balance ──
                if (!account.hasSufficientBalance(emiAmt)) {

                    // Only increment overdue count once per EMI
                    if (emi.getStatus() != LoanEmi.EmiStatus.OVERDUE) {
                        emi.setStatus(LoanEmi.EmiStatus.OVERDUE);
                        loanEmiRepository.save(emi);
                        loan.setEmisOverdue(loan.getEmisOverdue() + 1);
                        loan.setStatus(Loan.LoanStatus.OVERDUE);
                        loanRepository.save(loan);
                    }

                    log.warn("EMI OVERDUE: loan {} emi #{} | account {} | " +
                             "required ₹{} | available ₹{}",
                            loan.getLoanId(), emi.getEmiNumber(),
                            account.getAccountNumber(),
                            emiAmt, account.getAvailableBalance());
                    continue;
                }

                // Capture OLD status BEFORE changing it (needed for overdue count fix)
                boolean wasOverdue = emi.getStatus() == LoanEmi.EmiStatus.OVERDUE;

                BigDecimal principalComp = emi.getPrincipalComponent();
                BigDecimal interestComp  = emi.getInterestComponent();
                BigDecimal custBalBefore = account.getBalance();

                // ── 2. Debit customer account ──
                account.setBalance(custBalBefore.subtract(emiAmt));
                account.recalculateAvailableBalance();
                account.setLastTransactionAt(LocalDateTime.now());
                accountRepository.save(account);

                // ── 3. Credit treasury (principal back + interest as profit) ──
                if (treasury != null) {
                    treasury.receive(principalComp, interestComp);
                    treasuryRepository.save(treasury);
                }

                // ── 4. Create EMI_DEDUCTION transaction ──
                String emiTxnRef = refGen.generate();

                Transaction emiTxn = Transaction.builder()
                        .referenceNumber(emiTxnRef)
                        .fromAccount(account)
                        .fromAccountNumber(account.getAccountNumber())
                        .amount(emiAmt)
                        .netAmount(emiAmt)
                        .charges(BigDecimal.ZERO)
                        .currency("INR")
                        .transactionType(Transaction.TransactionType.EMI_DEDUCTION)
                        .transactionMode(Transaction.TransactionMode.SYSTEM)
                        .description("EMI #" + emi.getEmiNumber() +
                                     " | Loan: " + loan.getLoanId() +
                                     " | Principal: ₹" + principalComp +
                                     " | Interest: ₹" + interestComp)
                        .fromBalanceBefore(custBalBefore)
                        .fromBalanceAfter(account.getBalance())
                        .status(Transaction.TransactionStatus.SUCCESS)
                        .initiatedByUsername("SYSTEM")
                        .initiatedByRole(Transaction.InitiatedByRole.SYSTEM)
                        .processedAt(LocalDateTime.now())
                        .build();

                transactionRepository.save(emiTxn);

                // ── 5. Update EMI row ──
                emi.setStatus(LoanEmi.EmiStatus.PAID);
                emi.setPaidAt(LocalDateTime.now());
                emi.setPaidAmount(emiAmt);
                emi.setTransactionRef(emiTxnRef);
                loanEmiRepository.save(emi);

                // ── 6. Update loan ──
                loan.setEmisPaid(loan.getEmisPaid() + 1);
                loan.setOutstandingBalance(
                        emi.getOutstandingAfter() != null
                        ? emi.getOutstandingAfter()
                        : BigDecimal.ZERO);
                loan.setNextEmiDate(emi.getDueDate().plusMonths(1));

                // Fix overdue count — use wasOverdue captured BEFORE status change
                if (wasOverdue && loan.getEmisOverdue() > 0) {
                    loan.setEmisOverdue(loan.getEmisOverdue() - 1);
                }

                // ── 7. Close loan if all EMIs paid ──
                if (loan.getEmisPaid() >= loan.getTenureMonths()) {
                    loan.setStatus(Loan.LoanStatus.CLOSED);
                    loan.setOutstandingBalance(BigDecimal.ZERO);
                    log.info("Loan CLOSED (all EMIs paid): {}", loan.getLoanId());
                } else if (loan.getEmisOverdue() == 0 &&
                           loan.getStatus() == Loan.LoanStatus.OVERDUE) {
                    // Recovered from overdue
                    loan.setStatus(Loan.LoanStatus.APPROVED);
                    log.info("Loan recovered from OVERDUE: {}", loan.getLoanId());
                }

                loanRepository.save(loan);

                log.info("EMI PAID: loan {} emi #{} ₹{} | account {} → treasury {} | txn {}",
                        loan.getLoanId(), emi.getEmiNumber(), emiAmt,
                        account.getAccountNumber(),
                        treasury != null ? treasury.getTreasuryCode() : "N/A",
                        emiTxnRef);

            } catch (Exception e) {
                log.error("EMI processing FAILED: loan {} emi #{} — {}",
                        loan.getLoanId(), emi.getEmiNumber(), e.getMessage(), e);
            }
        }

        log.info("EMI scheduler: processing complete.");
    }

    // ─────────────────────────────────────────────
    //  PRIVATE HELPERS
    // ─────────────────────────────────────────────

    // EMI formula: E = P × r × (1+r)^n / ((1+r)^n - 1)
    private BigDecimal computeEmi(
            BigDecimal principal, BigDecimal annualRate, int tenure) {

        BigDecimal r = annualRate
                .divide(BigDecimal.valueOf(100), 10, RoundingMode.HALF_UP)
                .divide(BigDecimal.valueOf(12),  10, RoundingMode.HALF_UP);

        BigDecimal onePlusR = BigDecimal.ONE.add(r);
        BigDecimal pow      = onePlusR.pow(tenure, new MathContext(20));

        return principal
                .multiply(r).multiply(pow)
                .divide(pow.subtract(BigDecimal.ONE), 2, RoundingMode.HALF_UP);
    }

    // Generate amortisation schedule after loan approval
    private void generateEmiSchedule(Loan loan) {

        BigDecimal principal   = loan.getPrincipalAmount();
        BigDecimal monthlyRate = loan.getInterestRate()
                .divide(BigDecimal.valueOf(100), 10, RoundingMode.HALF_UP)
                .divide(BigDecimal.valueOf(12),  10, RoundingMode.HALF_UP);
        BigDecimal emi         = loan.getEmiAmount();
        BigDecimal outstanding = principal;
        LocalDate  dueDate     = loan.getNextEmiDate();

        List<LoanEmi> schedule = new ArrayList<>();

        for (int i = 1; i <= loan.getTenureMonths(); i++) {
            BigDecimal interestComp  = outstanding
                    .multiply(monthlyRate)
                    .setScale(2, RoundingMode.HALF_UP);
            BigDecimal principalComp = emi
                    .subtract(interestComp)
                    .max(BigDecimal.ZERO);

            outstanding = outstanding
                    .subtract(principalComp)
                    .max(BigDecimal.ZERO);

            // Last EMI — clear any rounding remainder
            if (i == loan.getTenureMonths()) {
                outstanding = BigDecimal.ZERO;
            }

            schedule.add(LoanEmi.builder()
                    .loan(loan)
                    .emiNumber(i)
                    .dueDate(dueDate)
                    .emiAmount(emi)
                    .principalComponent(principalComp)
                    .interestComponent(interestComp)
                    .outstandingAfter(outstanding)
                    .status(LoanEmi.EmiStatus.PENDING)
                    .build());

            dueDate = dueDate.plusMonths(1);
        }

        loanEmiRepository.saveAll(schedule);
        log.info("Generated {} EMI rows for loan {}",
                schedule.size(), loan.getLoanId());
    }

    // Parse BigDecimal with clean error message
    private BigDecimal parseBD(String value, String fieldName) {
        try {
            return new BigDecimal(value);
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_" + fieldName.toUpperCase().replace(" ", "_"),
                    "Invalid " + fieldName + " value: '" + value + "'");
        }
    }

    private Loan findLoanByLoanId(String loanId) {
        return loanRepository.findByLoanId(loanId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "LOAN_NOT_FOUND",
                        "Loan not found: " + loanId));
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
                        "Account not found: " + accountNumber));
    }

    private void validateOwnership(Account account, String username) {
        if (!account.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied to this account.");
        }
    }

    private void validateLoanOwnership(Loan loan, String username) {
        if (!loan.getUser().getUsername().equals(username)) {
            throw new NeoBankException(HttpStatus.FORBIDDEN,
                    "ACCESS_DENIED", "Access denied to this loan.");
        }
    }

    private void notifyLoanStatus(Loan loan, String event) {
        try {
            String name = loan.getUser().getFullName() != null
                    ? loan.getUser().getFullName()
                    : loan.getUser().getUsername();

            String subject = switch (event) {
                case "submitted" -> "NeoBank — Loan Application Submitted";
                case "approved"  -> "NeoBank — Loan Approved & Disbursed 🎉";
                case "rejected"  -> "NeoBank — Loan Application Update";
                default          -> "NeoBank — Loan Update";
            };

            String body = switch (event) {
                case "submitted" -> """
                    Dear %s,

                    Your loan application (%s) for ₹%s has been submitted.
                    Loan Type : %s
                    Tenure    : %d months

                    We will review your application within 2-3 business days.

                    NeoBank Team
                    """.formatted(name, loan.getLoanId(),
                        loan.getPrincipalAmount(),
                        loan.getLoanType(), loan.getTenureMonths());

                case "approved" -> """
                    Dear %s,

                    🎉 Congratulations! Your loan has been APPROVED & DISBURSED.

                    Loan ID   : %s
                    Amount    : ₹%s (credited to your account)
                    Rate      : %s%% p.a.
                    EMI       : ₹%s / month
                    First EMI : %s
                    Maturity  : %s

                    Please ensure sufficient balance on the due date each month.

                    NeoBank Team
                    """.formatted(name, loan.getLoanId(),
                        loan.getPrincipalAmount(),
                        loan.getInterestRate(),
                        loan.getEmiAmount(),
                        loan.getNextEmiDate().format(FMT),
                        loan.getMaturityDate().format(FMT));

                case "rejected" -> """
                    Dear %s,

                    Your loan application %s has been reviewed.

                    Status : REJECTED
                    Reason : %s

                    You may reapply after addressing the above concern.

                    NeoBank Team
                    """.formatted(name, loan.getLoanId(),
                        loan.getRejectionReason());

                default -> "Loan update for " + loan.getLoanId();
            };

            mailService.sendMail(loan.getUser().getEmail(), subject, body);

        } catch (Exception e) {
            log.warn("Loan email notification failed for {}", loan.getLoanId());
        }
    }

    public LoanResponseDTO buildResponse(Loan l, boolean includeDocs) {

        var b = LoanResponseDTO.builder()
                .id(l.getId())
                .loanId(l.getLoanId())
                .loanType(l.getLoanType().name())
                .status(l.getStatus().name())
                .purpose(l.getPurpose())
                .principalAmount(l.getPrincipalAmount().toPlainString())
                .tenureMonths(l.getTenureMonths())
                .emisPaid(l.getEmisPaid())
                .emisOverdue(l.getEmisOverdue())
                .totalEmis(l.getTenureMonths())
                .foreclosureRequested(l.getForeclosureRequested())
                .accountNumber(l.getAccount().getAccountNumber())
                .createdAt(l.getCreatedAt() != null
                        ? l.getCreatedAt().format(FMT_FULL) : null)
                .updatedAt(l.getUpdatedAt() != null
                        ? l.getUpdatedAt().format(FMT_FULL) : null);

        // Nullable fields
        if (l.getInterestRate()       != null)
            b.interestRate(l.getInterestRate().toPlainString());
        if (l.getEmiAmount()          != null)
            b.emiAmount(l.getEmiAmount().toPlainString());
        if (l.getOutstandingBalance() != null)
            b.outstandingBalance(l.getOutstandingBalance().toPlainString());
        if (l.getTotalInterest()      != null)
            b.totalInterest(l.getTotalInterest().toPlainString());
        if (l.getTotalPayable()       != null)
            b.totalPayable(l.getTotalPayable().toPlainString());
        if (l.getDisbursementDate()   != null)
            b.disbursementDate(l.getDisbursementDate().format(FMT));
        if (l.getNextEmiDate()        != null)
            b.nextEmiDate(l.getNextEmiDate().format(FMT));
        if (l.getMaturityDate()       != null)
            b.maturityDate(l.getMaturityDate().format(FMT));
        if (l.getRejectionReason()    != null)
            b.rejectionReason(l.getRejectionReason());
        if (l.getReviewedBy()         != null)
            b.reviewedBy(l.getReviewedBy());
        if (l.getReviewedAt()         != null)
            b.reviewedAt(l.getReviewedAt().format(FMT_FULL));
        if (l.getForeclosureAmount()  != null)
            b.foreclosureAmount(l.getForeclosureAmount().toPlainString());

        // Treasury info
        if (l.getTreasury() != null) {
            b.treasuryCode(l.getTreasury().getTreasuryCode());
            b.treasuryName(l.getTreasury().getName());
        }
        
        // ── also update buildResponse to include product info ──
        // Add in buildResponse() after treasury null check:

        if (l.getLoanProduct() != null) {
            b.productId(l.getLoanProduct().getId());
            b.productName(l.getLoanProduct().getProductName());
        }

        // Documents (only for admin detail view)
        if (includeDocs) {
            if (l.getIncomeProof()   != null)
                b.incomeProofBase64(Base64.getEncoder()
                        .encodeToString(l.getIncomeProof()))
                 .incomeProofType(l.getIncomeProofType());
            if (l.getAddressProof()  != null)
                b.addressProofBase64(Base64.getEncoder()
                        .encodeToString(l.getAddressProof()))
                 .addressProofType(l.getAddressProofType());
            if (l.getPropertyDoc()   != null)
                b.propertyDocBase64(Base64.getEncoder()
                        .encodeToString(l.getPropertyDoc()))
                 .propertyDocType(l.getPropertyDocType());
            if (l.getVehicleDoc()    != null)
                b.vehicleDocBase64(Base64.getEncoder()
                        .encodeToString(l.getVehicleDoc()))
                 .vehicleDocType(l.getVehicleDocType());
            if (l.getBankStatement() != null)
                b.bankStatementBase64(Base64.getEncoder()
                        .encodeToString(l.getBankStatement()))
                 .bankStatementType(l.getBankStatementType());
        }
        

        return b.build();
    }

    private LoanEmiResponseDTO buildEmiResponse(LoanEmi e) {
        return LoanEmiResponseDTO.builder()
                .id(e.getId())
                .emiNumber(e.getEmiNumber())
                .dueDate(e.getDueDate().format(FMT))
                .emiAmount(e.getEmiAmount().toPlainString())
                .principalComponent(e.getPrincipalComponent() != null
                        ? e.getPrincipalComponent().toPlainString() : null)
                .interestComponent(e.getInterestComponent() != null
                        ? e.getInterestComponent().toPlainString() : null)
                .outstandingAfter(e.getOutstandingAfter() != null
                        ? e.getOutstandingAfter().toPlainString() : null)
                .status(e.getStatus().name())
                .paidAt(e.getPaidAt() != null
                        ? e.getPaidAt().format(FMT_FULL) : null)
                .transactionRef(e.getTransactionRef())
                .build();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// // ── ADD to LoanService injections ──
//    private final LoanProductService    loanProductService;
//    private final LoanProductRepository loanProductRepository;

    // ─────────────────────────────────────────────
    //  UPDATED applyLoan() — with product validation
    // ─────────────────────────────────────────────

    @Transactional
    public LoanResponseDTO applyLoan(
            LoanApplicationRequestDTO req,
            MultipartFile incomeProof,
            MultipartFile addressProof,
            MultipartFile propertyDoc,
            MultipartFile vehicleDoc,
            MultipartFile bankStatement,
            String username) throws Exception {

        User user = findUser(username);

        // ── Resolve loan type & product ──
        Loan.LoanType loanType;
        LoanProduct   product = null;

        if (req.getProductId() != null) {
            // Product-based application (SRS requirement)
            product = loanProductService.findById(req.getProductId());

            if (!Boolean.TRUE.equals(product.getIsActive())) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "PRODUCT_INACTIVE",
                        "This loan product is not currently available.");
            }
            loanType = product.getLoanType();
        } else if (req.getLoanType() != null) {
            // Fallback: direct loan type (backward compatible)
            try {
                loanType = Loan.LoanType.valueOf(
                        req.getLoanType().toUpperCase());
            } catch (Exception e) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_TYPE",
                        "Loan type must be HOME, PERSONAL, VEHICLE, or EDUCATION.");
            }
        } else {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "PRODUCT_REQUIRED",
                    "Either productId or loanType is required.");
        }

        // ── Validate amount ──
        BigDecimal amount = parseBD(req.getPrincipalAmount(), "Loan amount");

        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Loan amount must be > 0.");
        }

        // Product-specific validation
        if (product != null) {
            if (!product.isAmountValid(amount)) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "AMOUNT_OUT_OF_RANGE",
                        "Amount must be between ₹" +
                        product.getMinAmount() +
                        " and ₹" + product.getMaxAmount() +
                        " for " + product.getProductName() + ".");
            }
        } else {
            // Fallback max validation
            if (amount.compareTo(new BigDecimal("50000000")) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "AMOUNT_TOO_HIGH",
                        "Maximum loan amount is ₹5,00,00,000.");
            }
        }

        // ── Validate tenure ──
        if (req.getTenureMonths() == null ||
            req.getTenureMonths() <= 0 ||
            req.getTenureMonths() > 360) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_TENURE", "Tenure must be 1–360 months.");
        }

        // Product-specific tenure validation
        if (product != null && !product.isTenureAllowed(req.getTenureMonths())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "TENURE_NOT_ALLOWED",
                    "Tenure " + req.getTenureMonths() +
                    " months is not allowed for " +
                    product.getProductName() +
                    ". Allowed: " + product.getAllowedTenures());
        }

        // ── Account ──
        Account account = findAccount(req.getAccountNumber());
        validateOwnership(account, username);

        if (!account.isOperable()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ACCOUNT_NOT_OPERABLE",
                    "Account " + account.getAccountNumber() +
                    " is " + account.getStatus().name() + ".");
        }

        // ── One PENDING loan at a time ──
        boolean hasPending = loanRepository.existsByUserIdAndStatusIn(
                user.getId(), List.of(Loan.LoanStatus.PENDING));
        if (hasPending) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "PENDING_LOAN",
                    "You already have a loan application under review.");
        }

        // ── Document validation ──
        // Use product requirements if available, else defaults
        boolean needIncomeProof = product != null
                ? Boolean.TRUE.equals(product.getIncomeProofRequired())
                : true;
        boolean needPropertyDoc = product != null
                ? Boolean.TRUE.equals(product.getPropertyDocRequired())
                : loanType == Loan.LoanType.HOME;
        boolean needVehicleDoc  = product != null
                ? Boolean.TRUE.equals(product.getVehicleDocRequired())
                : loanType == Loan.LoanType.VEHICLE;

        if (needIncomeProof &&
            (incomeProof == null || incomeProof.isEmpty())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "MISSING_DOC", "Income proof document is required.");
        }
        if (needPropertyDoc &&
            (propertyDoc == null || propertyDoc.isEmpty())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "MISSING_DOC",
                    "Property document is required for " +
                    (product != null ? product.getProductName()
                                     : "Home Loan") + ".");
        }
        if (needVehicleDoc &&
            (vehicleDoc == null || vehicleDoc.isEmpty())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "MISSING_DOC",
                    "Vehicle document is required for " +
                    (product != null ? product.getProductName()
                                     : "Vehicle Loan") + ".");
        }

        // ── Build loan ──
        Loan loan = Loan.builder()
                .loanId(loanIdGenerator.generate())
                .user(user)
                .account(account)
                .loanType(loanType)
                .loanProduct(product)
                .principalAmount(amount)
                .tenureMonths(req.getTenureMonths())
                .purpose(req.getPurpose())
                .status(Loan.LoanStatus.PENDING)
                .outstandingBalance(amount)
                .emisPaid(0)
                .emisOverdue(0)
                .foreclosureRequested(false)
                .build();

        // ── Attach documents ──
        attachDocs(loan, incomeProof, addressProof,
                   propertyDoc, vehicleDoc, bankStatement);

        Loan saved = loanRepository.save(loan);
        log.info("Loan applied: {} {} ₹{} product:{} by {}",
                saved.getLoanId(), loanType, amount,
                product != null ? product.getProductName() : "N/A",
                username);

        notifyLoanStatus(saved, "submitted");
        return buildResponse(saved, false);
    }

    // ── Helper: attach documents ──
    private void attachDocs(
            Loan loan,
            MultipartFile incomeProof,
            MultipartFile addressProof,
            MultipartFile propertyDoc,
            MultipartFile vehicleDoc,
            MultipartFile bankStatement) throws Exception {

        if (incomeProof   != null && !incomeProof.isEmpty()) {
            loan.setIncomeProof(incomeProof.getBytes());
            loan.setIncomeProofType(incomeProof.getContentType());
        }
        if (addressProof  != null && !addressProof.isEmpty()) {
            loan.setAddressProof(addressProof.getBytes());
            loan.setAddressProofType(addressProof.getContentType());
        }
        if (propertyDoc   != null && !propertyDoc.isEmpty()) {
            loan.setPropertyDoc(propertyDoc.getBytes());
            loan.setPropertyDocType(propertyDoc.getContentType());
        }
        if (vehicleDoc    != null && !vehicleDoc.isEmpty()) {
            loan.setVehicleDoc(vehicleDoc.getBytes());
            loan.setVehicleDocType(vehicleDoc.getContentType());
        }
        if (bankStatement != null && !bankStatement.isEmpty()) {
            loan.setBankStatement(bankStatement.getBytes());
            loan.setBankStatementType(bankStatement.getContentType());
        }
    }

    // ─────────────────────────────────────────────
    //  MANUAL EMI PAYMENT (PATCH /pay)
    //  Customer or Admin marks instalment as PAID
    //  Used when: bank transfer done outside app
    //  Or when: scheduler missed
    // ─────────────────────────────────────────────

    @Transactional
    public LoanEmiResponseDTO manualPayEmi(
            String loanId,
            Long emiId,
            ManualEmiPaymentRequestDTO req,
            String username,
            boolean isAdmin) {

        Loan loan = findLoanByLoanId(loanId);

        // Only customer who owns loan OR admin can pay
        if (!isAdmin) {
            validateLoanOwnership(loan, username);
        }

        // Loan must be active
        if (loan.getStatus() == Loan.LoanStatus.CLOSED ||
            loan.getStatus() == Loan.LoanStatus.FORECLOSED ||
            loan.getStatus() == Loan.LoanStatus.REJECTED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "LOAN_NOT_ACTIVE",
                    "Cannot pay EMI for a " +
                    loan.getStatus().name() + " loan.");
        }

        // Find the specific EMI
        LoanEmi emi = loanEmiRepository.findById(emiId)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "EMI_NOT_FOUND",
                        "EMI record not found."));

        // Verify EMI belongs to this loan
        if (!emi.getLoan().getId().equals(loan.getId())) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "EMI_MISMATCH",
                    "EMI does not belong to loan " + loanId + ".");
        }

        // Only PENDING or OVERDUE EMIs can be paid
        if (emi.getStatus() == LoanEmi.EmiStatus.PAID) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "ALREADY_PAID", "This EMI is already paid.");
        }
        if (emi.getStatus() == LoanEmi.EmiStatus.WAIVED) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "EMI_WAIVED", "This EMI has been waived.");
        }

        Account  account  = loan.getAccount();
        Treasury treasury = loan.getTreasury();

        BigDecimal emiAmt        = emi.getEmiAmount();
        BigDecimal principalComp = emi.getPrincipalComponent();
        BigDecimal interestComp  = emi.getInterestComponent();

        // ── Check balance ──
        if (!account.hasSufficientBalance(emiAmt)) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INSUFFICIENT_BALANCE",
                    "Insufficient balance for EMI payment. " +
                    "Required: ₹" + emiAmt +
                    " | Available: ₹" + account.getAvailableBalance());
        }

        boolean wasOverdue = emi.getStatus() == LoanEmi.EmiStatus.OVERDUE;
        BigDecimal custBalBefore = account.getBalance();

        // ── Debit customer ──
        account.setBalance(custBalBefore.subtract(emiAmt));
        account.recalculateAvailableBalance();
        account.setLastTransactionAt(LocalDateTime.now());
        accountRepository.save(account);

        // ── Credit treasury ──
        if (treasury != null) {
            treasury.receive(principalComp, interestComp);
            treasuryRepository.save(treasury);
        }

        // ── Create EMI_DEDUCTION transaction ──
        String txnRef = refGen.generate();

        Transaction emiTxn = Transaction.builder()
                .referenceNumber(txnRef)
                .fromAccount(account)
                .fromAccountNumber(account.getAccountNumber())
                .amount(emiAmt)
                .netAmount(emiAmt)
                .charges(BigDecimal.ZERO)
                .currency("INR")
                .transactionType(Transaction.TransactionType.EMI_DEDUCTION)
                .transactionMode(isAdmin
                        ? Transaction.TransactionMode.ADMIN
                        : Transaction.TransactionMode.ONLINE)
                .description("Manual EMI #" + emi.getEmiNumber() +
                             " | Loan: " + loan.getLoanId() +
                             (req.getNote() != null
                                     ? " | " + req.getNote() : ""))
                .fromBalanceBefore(custBalBefore)
                .fromBalanceAfter(account.getBalance())
                .status(Transaction.TransactionStatus.SUCCESS)
                .initiatedByUsername(username)
                .initiatedByRole(isAdmin
                        ? Transaction.InitiatedByRole.ADMIN
                        : Transaction.InitiatedByRole.CUSTOMER)
                .processedAt(LocalDateTime.now())
                .build();

        transactionRepository.save(emiTxn);

        // ── Update EMI ──
        emi.setStatus(LoanEmi.EmiStatus.PAID);
        emi.setPaidAt(LocalDateTime.now());
        emi.setPaidAmount(emiAmt);
        emi.setTransactionRef(txnRef);
        loanEmiRepository.save(emi);

        // ── Update loan ──
        loan.setEmisPaid(loan.getEmisPaid() + 1);
        loan.setOutstandingBalance(
                emi.getOutstandingAfter() != null
                ? emi.getOutstandingAfter() : BigDecimal.ZERO);

        // Fix overdue count
        if (wasOverdue && loan.getEmisOverdue() > 0) {
            loan.setEmisOverdue(loan.getEmisOverdue() - 1);
        }

        // Update next EMI date
        loan.setNextEmiDate(emi.getDueDate().plusMonths(1));

        // Check if fully paid
        if (loan.getEmisPaid() >= loan.getTenureMonths()) {
            loan.setStatus(Loan.LoanStatus.CLOSED);
            loan.setOutstandingBalance(BigDecimal.ZERO);
            log.info("Loan CLOSED after manual payment: {}",
                    loan.getLoanId());
        } else if (loan.getEmisOverdue() == 0 &&
                   loan.getStatus() == Loan.LoanStatus.OVERDUE) {
            loan.setStatus(Loan.LoanStatus.APPROVED);
            log.info("Loan recovered from OVERDUE: {}", loan.getLoanId());
        }

        loanRepository.save(loan);

        log.info("EMI manually paid: loan {} emi #{} ₹{} by {}",
                loan.getLoanId(), emi.getEmiNumber(), emiAmt, username);

        return buildEmiResponse(emi);
    }
    
 // Add to LoanService.java:

    @Transactional(readOnly = true)
    public List<LoanEmiResponseDTO> getEmiScheduleByAdmin(String loanId) {
        Loan loan = findLoanByLoanId(loanId);
        return loanEmiRepository
                .findByLoanIdOrderByEmiNumberAsc(loan.getId())
                .stream().map(this::buildEmiResponse).toList();
    }


}