// src/main/java/com/neobank/entity/LoanEmi.java

package com.neobank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "loan_emis",
    indexes = {
        @Index(name = "idx_emi_loan",   columnList = "loan_id"),
        @Index(name = "idx_emi_due",    columnList = "due_date"),
        @Index(name = "idx_emi_status", columnList = "status"),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class LoanEmi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    @Column(name = "emi_number", nullable = false)
    private Integer emiNumber;         // 1 to tenure months

    @Column(name = "due_date", nullable = false)
    private LocalDate dueDate;

    @Column(name = "emi_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal emiAmount;

    @Column(name = "principal_component", precision = 15, scale = 2)
    private BigDecimal principalComponent;

    @Column(name = "interest_component", precision = 15, scale = 2)
    private BigDecimal interestComponent;

    @Column(name = "outstanding_after", precision = 15, scale = 2)
    private BigDecimal outstandingAfter;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private EmiStatus status = EmiStatus.PENDING;

    @Column(name = "paid_at")
    private LocalDateTime paidAt;

    @Column(name = "paid_amount", precision = 15, scale = 2)
    private BigDecimal paidAmount;

    // Reference to the transaction created on EMI deduction
    @Column(name = "transaction_ref", length = 50)
    private String transactionRef;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public enum EmiStatus {
        PENDING, PAID, OVERDUE, WAIVED
    }
}