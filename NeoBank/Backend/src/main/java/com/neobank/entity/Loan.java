// src/main/java/com/neobank/entity/Loan.java

package com.neobank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "loans",
    indexes = {
        @Index(name = "idx_loan_user",   columnList = "user_id"),
        @Index(name = "idx_loan_status", columnList = "status"),
        @Index(name = "idx_loan_type",   columnList = "loan_type"),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Loan ID e.g. LN20260000001
    @Column(name = "loan_id", unique = true, nullable = false, length = 20)
    private String loanId;
    
 // Add inside Loan.java class:

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_product_id", nullable = true)
    private LoanProduct loanProduct;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Linked account for EMI deduction
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @Enumerated(EnumType.STRING)
    @Column(name = "loan_type", nullable = false, length = 20)
    private LoanType loanType;

    @Column(name = "purpose", length = 500)
    private String purpose;

    @Column(name = "principal_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal principalAmount;

    @Column(name = "interest_rate", precision = 5, scale = 2)
    private BigDecimal interestRate;   // annual % set by admin on approval

    @Column(name = "tenure_months", nullable = false)
    private Integer tenureMonths;

    @Column(name = "emi_amount", precision = 15, scale = 2)
    private BigDecimal emiAmount;      // calculated on approval

    @Column(name = "outstanding_balance", precision = 15, scale = 2)
    private BigDecimal outstandingBalance;

    @Column(name = "total_interest", precision = 15, scale = 2)
    private BigDecimal totalInterest;

    @Column(name = "total_payable", precision = 15, scale = 2)
    private BigDecimal totalPayable;

    @Column(name = "emis_paid")
    @Builder.Default
    private Integer emisPaid = 0;

    @Column(name = "emis_overdue")
    @Builder.Default
    private Integer emisOverdue = 0;

    @Column(name = "disbursement_date")
    private LocalDate disbursementDate;

    @Column(name = "next_emi_date")
    private LocalDate nextEmiDate;

    @Column(name = "maturity_date")
    private LocalDate maturityDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private LoanStatus status = LoanStatus.PENDING;

    @Column(name = "rejection_reason", length = 500)
    private String rejectionReason;

    @Column(name = "reviewed_by", length = 100)
    private String reviewedBy;

    @Column(name = "reviewed_at")
    private LocalDateTime reviewedAt;

    // Foreclosure
    @Column(name = "foreclosure_requested")
    @Builder.Default
    private Boolean foreclosureRequested = false;

    @Column(name = "foreclosure_amount", precision = 15, scale = 2)
    private BigDecimal foreclosureAmount;

    @Column(name = "foreclosed_at")
    private LocalDateTime foreclosedAt;

    // Document BLOBs
    @Column(name = "income_proof",   columnDefinition = "LONGBLOB")
    private byte[] incomeProof;
    @Column(name = "income_proof_type", length = 50)
    private String incomeProofType;

    @Column(name = "address_proof",  columnDefinition = "LONGBLOB")
    private byte[] addressProof;
    @Column(name = "address_proof_type", length = 50)
    private String addressProofType;

    @Column(name = "property_doc",   columnDefinition = "LONGBLOB")
    private byte[] propertyDoc;    // for HOME loan
    @Column(name = "property_doc_type", length = 50)
    private String propertyDocType;

    @Column(name = "vehicle_doc",    columnDefinition = "LONGBLOB")
    private byte[] vehicleDoc;     // for VEHICLE loan
    @Column(name = "vehicle_doc_type", length = 50)
    private String vehicleDocType;

    @Column(name = "bank_statement", columnDefinition = "LONGBLOB")
    private byte[] bankStatement;
    @Column(name = "bank_statement_type", length = 50)
    private String bankStatementType;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
 // Add to Loan.java entity (inside the class):

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "treasury_id", nullable = true)
    private Treasury treasury;

    // ── Enums ──
    public enum LoanType {
        HOME, PERSONAL, VEHICLE, EDUCATION
    }

    public enum LoanStatus {
        PENDING,      // submitted, under review
        APPROVED,     // approved, disbursed, active
        REJECTED,     // rejected by admin
        CLOSED,       // fully paid
        FORECLOSED,   // foreclosure completed
        OVERDUE       // has overdue EMIs
    }
}