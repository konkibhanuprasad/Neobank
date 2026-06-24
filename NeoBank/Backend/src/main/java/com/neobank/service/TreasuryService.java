// src/main/java/com/neobank/service/TreasuryService.java

package com.neobank.service;

import com.neobank.dto.treasury.*;
import com.neobank.entity.Treasury;
import com.neobank.exception.NeoBankException;
import com.neobank.repository.TreasuryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Year;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TreasuryService {

    private final TreasuryRepository treasuryRepository;

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");

    // ─────────────────────────────────────────────
    //  AUTO-INIT DEFAULT TREASURY
    //  Called on application startup
    // ─────────────────────────────────────────────

    @Transactional
    public void initDefaultTreasury() {
        long count = treasuryRepository.count();
        if (count > 0) {
            log.info("Treasury: {} treasury(ies) already exist. Skipping init.", count);
            return;
        }

        // Create default treasury with ₹100 Crore opening balance
        BigDecimal openingBalance = new BigDecimal("1000000000"); // ₹100 Cr

        Treasury treasury = Treasury.builder()
                .treasuryCode(generateCode())
                .name("NeoBank Main Treasury")
                .description("Default treasury account for all loan disbursements. " +
                             "Opening balance: ₹100,00,00,000 (100 Crore).")
                .balance(openingBalance)
                .totalDisbursed(BigDecimal.ZERO)
                .totalRecovered(BigDecimal.ZERO)
                .totalInterestEarned(BigDecimal.ZERO)
                .status(Treasury.TreasuryStatus.ACTIVE)
                .createdBy("SYSTEM")
                .build();

        treasuryRepository.save(treasury);
        log.info("✅ Default treasury created: {} balance: ₹{}",
                treasury.getTreasuryCode(), openingBalance);
    }

    // ─────────────────────────────────────────────
    //  CREATE TREASURY (admin)
    // ─────────────────────────────────────────────

    @Transactional
    public TreasuryResponseDTO createTreasury(
            CreateTreasuryRequestDTO req, String adminUsername) {

        if (req.getName() == null || req.getName().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NAME_REQUIRED", "Treasury name is required.");
        }

        BigDecimal initialBalance = BigDecimal.ZERO;
        if (req.getInitialBalance() != null && !req.getInitialBalance().isBlank()) {
            try {
                initialBalance = new BigDecimal(req.getInitialBalance());
                if (initialBalance.compareTo(BigDecimal.ZERO) < 0) {
                    throw new NeoBankException(HttpStatus.BAD_REQUEST,
                            "INVALID_BALANCE", "Initial balance cannot be negative.");
                }
            } catch (NumberFormatException e) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_BALANCE", "Invalid initial balance.");
            }
        }

        Treasury treasury = Treasury.builder()
                .treasuryCode(generateCode())
                .name(req.getName().trim())
                .description(req.getDescription() != null
                        ? req.getDescription().trim() : null)
                .balance(initialBalance)
                .totalDisbursed(BigDecimal.ZERO)
                .totalRecovered(BigDecimal.ZERO)
                .totalInterestEarned(BigDecimal.ZERO)
                .status(Treasury.TreasuryStatus.ACTIVE)
                .createdBy(adminUsername)
                .build();

        Treasury saved = treasuryRepository.save(treasury);
        log.info("Treasury created: {} by {}", saved.getTreasuryCode(), adminUsername);

        return buildResponse(saved);
    }

    // ─────────────────────────────────────────────
    //  GET ALL TREASURIES
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<TreasuryResponseDTO> getAllTreasuries() {
        return treasuryRepository.findAllByOrderByCreatedAtAsc()
                .stream().map(this::buildResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  GET ACTIVE TREASURIES (for loan approval dropdown)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<TreasuryResponseDTO> getActiveTreasuries() {
        return treasuryRepository
                .findByStatusOrderByCreatedAtAsc(Treasury.TreasuryStatus.ACTIVE)
                .stream().map(this::buildResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  GET ONE TREASURY
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public TreasuryResponseDTO getTreasury(Long id) {
        return buildResponse(findById(id));
    }

    // ─────────────────────────────────────────────
    //  TOP UP TREASURY (admin adds funds)
    // ─────────────────────────────────────────────

    @Transactional
    public TreasuryResponseDTO topUp(
            Long id, TopUpTreasuryRequestDTO req, String adminUsername) {

        Treasury treasury = findById(id);

        if (treasury.getStatus() == Treasury.TreasuryStatus.FROZEN) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "TREASURY_FROZEN", "Cannot top up a frozen treasury.");
        }

        BigDecimal amount;
        try {
            amount = new BigDecimal(req.getAmount());
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Invalid amount.");
        }
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Top-up amount must be > 0.");
        }

        treasury.topUp(amount);
        treasuryRepository.save(treasury);

        log.info("Treasury top-up: {} +₹{} by {}",
                treasury.getTreasuryCode(), amount, adminUsername);
        return buildResponse(treasury);
    }

    // ─────────────────────────────────────────────
    //  UPDATE STATUS
    // ─────────────────────────────────────────────

    @Transactional
    public TreasuryResponseDTO updateStatus(
            Long id, String status, String adminUsername) {

        Treasury treasury = findById(id);
        Treasury.TreasuryStatus ts;
        try {
            ts = Treasury.TreasuryStatus.valueOf(status.toUpperCase());
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_STATUS",
                    "Status must be ACTIVE, INACTIVE, or FROZEN.");
        }

        treasury.setStatus(ts);
        treasuryRepository.save(treasury);

        log.info("Treasury {} status → {} by {}",
                treasury.getTreasuryCode(), ts, adminUsername);
        return buildResponse(treasury);
    }

    // ─────────────────────────────────────────────
    //  INTERNAL — find by id (used by LoanService)
    // ─────────────────────────────────────────────

    public Treasury findById(Long id) {
        return treasuryRepository.findById(id)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "TREASURY_NOT_FOUND",
                        "Treasury not found."));
    }

    public Treasury findFirstActive() {
        return treasuryRepository.findFirstActive()
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "NO_ACTIVE_TREASURY",
                        "No active treasury found. Please create one first."));
    }

    // ─────────────────────────────────────────────
    //  PRIVATE
    // ─────────────────────────────────────────────

    private String generateCode() {
        int year  = Year.now().getValue();
        long count = treasuryRepository.count() + 1;
        return "TRY" + year + String.format("%07d", count);
    }

    public TreasuryResponseDTO buildResponse(Treasury t) {
        return TreasuryResponseDTO.builder()
                .id(t.getId())
                .treasuryCode(t.getTreasuryCode())
                .name(t.getName())
                .description(t.getDescription())
                .balance(t.getBalance().toPlainString())
                .totalDisbursed(t.getTotalDisbursed().toPlainString())
                .totalRecovered(t.getTotalRecovered().toPlainString())
                .totalInterestEarned(t.getTotalInterestEarned().toPlainString())
                .status(t.getStatus().name())
                .createdBy(t.getCreatedBy())
                .createdAt(t.getCreatedAt() != null
                        ? t.getCreatedAt().format(FMT) : null)
                .updatedAt(t.getUpdatedAt() != null
                        ? t.getUpdatedAt().format(FMT) : null)
                .build();
    }
}