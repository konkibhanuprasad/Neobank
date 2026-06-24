// src/main/java/com/neobank/service/LoanProductService.java

package com.neobank.service;

import com.neobank.dto.loan.*;
import com.neobank.entity.*;
import com.neobank.exception.NeoBankException;
import com.neobank.repository.LoanProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class LoanProductService {

    private final LoanProductRepository productRepository;

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");

    // ─────────────────────────────────────────────
    //  CREATE PRODUCT (Admin)
    // ─────────────────────────────────────────────

    @Transactional
    public LoanProductResponseDTO createProduct(
            CreateLoanProductRequestDTO req, String adminUsername) {

        // Validate
        if (req.getProductName() == null || req.getProductName().isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NAME_REQUIRED", "Product name is required.");
        }

        if (productRepository.existsByProductNameIgnoreCase(
                req.getProductName().trim())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "PRODUCT_EXISTS",
                    "A product with name '" + req.getProductName()
                    + "' already exists.");
        }

        // Validate loan type
        Loan.LoanType loanType;
        try {
            loanType = Loan.LoanType.valueOf(
                    req.getLoanType().toUpperCase());
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_TYPE",
                    "Loan type must be HOME, PERSONAL, VEHICLE, or EDUCATION.");
        }

        // Validate amounts
        BigDecimal minAmt = parseBD(req.getMinAmount(), "Min amount");
        BigDecimal maxAmt = parseBD(req.getMaxAmount(), "Max amount");

        if (minAmt.compareTo(BigDecimal.ZERO) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT", "Min amount must be > 0.");
        }
        if (maxAmt.compareTo(minAmt) <= 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_AMOUNT",
                    "Max amount must be greater than min amount.");
        }

        // Validate interest rate
        BigDecimal rate = parseBD(req.getAnnualInterestRate(), "Interest rate");
        if (rate.compareTo(BigDecimal.ZERO) <= 0 ||
            rate.compareTo(new BigDecimal("50")) > 0) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_RATE",
                    "Interest rate must be between 0.1% and 50%.");
        }

        // Validate tenures
        validateTenures(req.getAllowedTenures());

        LoanProduct product = LoanProduct.builder()
                .productName(req.getProductName().trim())
                .description(req.getDescription() != null
                        ? req.getDescription().trim() : null)
                .loanType(loanType)
                .minAmount(minAmt)
                .maxAmount(maxAmt)
                .annualInterestRate(rate)
                .allowedTenures(req.getAllowedTenures().trim())
                .incomeProofRequired(req.getIncomeProofRequired() != null
                        ? req.getIncomeProofRequired() : true)
                .addressProofRequired(req.getAddressProofRequired() != null
                        ? req.getAddressProofRequired() : false)
                .propertyDocRequired(req.getPropertyDocRequired() != null
                        ? req.getPropertyDocRequired() : false)
                .vehicleDocRequired(req.getVehicleDocRequired() != null
                        ? req.getVehicleDocRequired() : false)
                .bankStatementRequired(req.getBankStatementRequired() != null
                        ? req.getBankStatementRequired() : false)
                .isActive(true)
                .createdBy(adminUsername)
                .build();

        LoanProduct saved = productRepository.save(product);
        log.info("Loan product created: '{}' by {}",
                saved.getProductName(), adminUsername);

        return buildResponse(saved);
    }

    // ─────────────────────────────────────────────
    //  GET ALL PRODUCTS (Admin)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<LoanProductResponseDTO> getAllProducts() {
        return productRepository.findAllByOrderByCreatedAtDesc()
                .stream().map(this::buildResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  GET ACTIVE PRODUCTS (Customer)
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<LoanProductResponseDTO> getActiveProducts() {
        return productRepository.findByIsActiveTrueOrderByLoanTypeAsc()
                .stream().map(this::buildResponse).toList();
    }

    // ─────────────────────────────────────────────
    //  GET ONE PRODUCT
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public LoanProductResponseDTO getProduct(Long id) {
        return buildResponse(findById(id));
    }

    // ─────────────────────────────────────────────
    //  UPDATE PRODUCT (Admin)
    // ─────────────────────────────────────────────

    @Transactional
    public LoanProductResponseDTO updateProduct(
            Long id,
            UpdateLoanProductRequestDTO req,
            String adminUsername) {

        LoanProduct product = findById(id);

        if (req.getProductName() != null && !req.getProductName().isBlank()) {
            // Check uniqueness (ignore current product)
            if (productRepository.existsByProductNameIgnoreCase(
                    req.getProductName().trim()) &&
                !product.getProductName().equalsIgnoreCase(
                    req.getProductName().trim())) {
                throw new NeoBankException(HttpStatus.CONFLICT,
                        "PRODUCT_EXISTS",
                        "Product name already taken.");
            }
            product.setProductName(req.getProductName().trim());
        }

        if (req.getDescription() != null)
            product.setDescription(req.getDescription().trim());

        if (req.getMinAmount() != null) {
            BigDecimal min = parseBD(req.getMinAmount(), "Min amount");
            if (min.compareTo(BigDecimal.ZERO) <= 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_AMOUNT", "Min amount must be > 0.");
            }
            product.setMinAmount(min);
        }

        if (req.getMaxAmount() != null) {
            BigDecimal max = parseBD(req.getMaxAmount(), "Max amount");
            if (max.compareTo(product.getMinAmount()) <= 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_AMOUNT",
                        "Max amount must be greater than min amount.");
            }
            product.setMaxAmount(max);
        }

        if (req.getAnnualInterestRate() != null) {
            BigDecimal rate = parseBD(
                    req.getAnnualInterestRate(), "Interest rate");
            if (rate.compareTo(BigDecimal.ZERO) <= 0 ||
                rate.compareTo(new BigDecimal("50")) > 0) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_RATE",
                        "Rate must be between 0.1% and 50%.");
            }
            product.setAnnualInterestRate(rate);
        }

        if (req.getAllowedTenures() != null) {
            validateTenures(req.getAllowedTenures());
            product.setAllowedTenures(req.getAllowedTenures().trim());
        }

        if (req.getIncomeProofRequired()   != null)
            product.setIncomeProofRequired(req.getIncomeProofRequired());
        if (req.getAddressProofRequired()  != null)
            product.setAddressProofRequired(req.getAddressProofRequired());
        if (req.getPropertyDocRequired()   != null)
            product.setPropertyDocRequired(req.getPropertyDocRequired());
        if (req.getVehicleDocRequired()    != null)
            product.setVehicleDocRequired(req.getVehicleDocRequired());
        if (req.getBankStatementRequired() != null)
            product.setBankStatementRequired(req.getBankStatementRequired());
        if (req.getIsActive()              != null)
            product.setIsActive(req.getIsActive());

        productRepository.save(product);
        log.info("Loan product updated: '{}' by {}",
                product.getProductName(), adminUsername);

        return buildResponse(product);
    }

    // ─────────────────────────────────────────────
    //  INTERNAL — find by id (used by LoanService)
    // ─────────────────────────────────────────────

    public LoanProduct findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "PRODUCT_NOT_FOUND",
                        "Loan product not found: " + id));
    }

    // ─────────────────────────────────────────────
    //  PRIVATE HELPERS
    // ─────────────────────────────────────────────

    private void validateTenures(String tenures) {
        if (tenures == null || tenures.isBlank()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_TENURES",
                    "Allowed tenures are required " +
                    "(e.g. 12,24,36,60).");
        }
        try {
            String[] parts = tenures.split(",");
            if (parts.length == 0) throw new RuntimeException();
            for (String p : parts) {
                int t = Integer.parseInt(p.trim());
                if (t <= 0 || t > 360) throw new RuntimeException();
            }
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_TENURES",
                    "Tenures must be comma-separated months " +
                    "(e.g. 12,24,36,60). Each between 1–360.");
        }
    }

    private BigDecimal parseBD(String value, String field) {
        try {
            return new BigDecimal(value);
        } catch (Exception e) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_" + field.toUpperCase().replace(" ", "_"),
                    "Invalid " + field + " value.");
        }
    }

    public LoanProductResponseDTO buildResponse(LoanProduct p) {
        return LoanProductResponseDTO.builder()
                .id(p.getId())
                .productName(p.getProductName())
                .description(p.getDescription())
                .loanType(p.getLoanType().name())
                .minAmount(p.getMinAmount().toPlainString())
                .maxAmount(p.getMaxAmount().toPlainString())
                .annualInterestRate(p.getAnnualInterestRate().toPlainString())
                .allowedTenures(p.getAllowedTenures())
                .incomeProofRequired(p.getIncomeProofRequired())
                .addressProofRequired(p.getAddressProofRequired())
                .propertyDocRequired(p.getPropertyDocRequired())
                .vehicleDocRequired(p.getVehicleDocRequired())
                .bankStatementRequired(p.getBankStatementRequired())
                .isActive(p.getIsActive())
                .createdBy(p.getCreatedBy())
                .createdAt(p.getCreatedAt() != null
                        ? p.getCreatedAt().format(FMT) : null)
                .updatedAt(p.getUpdatedAt() != null
                        ? p.getUpdatedAt().format(FMT) : null)
                .build();
    }
}