// src/main/java/com/neobank/entity/LoanProduct.java

package com.neobank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(
    name = "loan_products",
    indexes = {
        @Index(name = "idx_lp_name",   columnList = "product_name", unique = true),
        @Index(name = "idx_lp_active", columnList = "is_active"),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class LoanProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "product_name", unique = true, nullable = false, length = 100)
    private String productName;

    @Column(name = "description", length = 500)
    private String description;

    // Loan type maps to existing enum
    @Enumerated(EnumType.STRING)
    @Column(name = "loan_type", nullable = false, length = 20)
    private Loan.LoanType loanType;

    @Column(name = "min_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal minAmount;

    @Column(name = "max_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal maxAmount;

    // Annual interest rate (e.g. 10.5)
    @Column(name = "annual_interest_rate", nullable = false, precision = 5, scale = 2)
    private BigDecimal annualInterestRate;

    // Comma-separated tenures in months e.g. "12,24,36,60,84"
    @Column(name = "allowed_tenures", nullable = false, length = 200)
    private String allowedTenures;

    // Documents required for this product
    @Column(name = "income_proof_required")
    @Builder.Default
    private Boolean incomeProofRequired = true;

    @Column(name = "address_proof_required")
    @Builder.Default
    private Boolean addressProofRequired = false;

    @Column(name = "property_doc_required")
    @Builder.Default
    private Boolean propertyDocRequired = false;

    @Column(name = "vehicle_doc_required")
    @Builder.Default
    private Boolean vehicleDocRequired = false;

    @Column(name = "bank_statement_required")
    @Builder.Default
    private Boolean bankStatementRequired = false;

    @Column(name = "is_active")
    @Builder.Default
    private Boolean isActive = true;

    @Column(name = "created_by", length = 100)
    private String createdBy;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // ── Helpers ──

    // Returns list of allowed tenures as integers
    public List<Integer> getAllowedTenureList() {
        return Arrays.stream(allowedTenures.split(","))
                .map(String::trim)
                .map(Integer::parseInt)
                .toList();
    }

    // Check if a given tenure is in allowed list
    public boolean isTenureAllowed(int months) {
        return getAllowedTenureList().contains(months);
    }

    // Check if amount is within product limits
    public boolean isAmountValid(BigDecimal amount) {
        return amount.compareTo(minAmount) >= 0 &&
               amount.compareTo(maxAmount) <= 0;
    }
}