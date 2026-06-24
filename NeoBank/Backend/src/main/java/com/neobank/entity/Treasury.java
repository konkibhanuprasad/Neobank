// src/main/java/com/neobank/entity/Treasury.java

package com.neobank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "treasuries",
    indexes = {
        @Index(name = "idx_treasury_code",   columnList = "treasury_code", unique = true),
        @Index(name = "idx_treasury_status", columnList = "status"),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Treasury {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // e.g. TRY20260000001
    @Column(name = "treasury_code", unique = true, nullable = false, length = 20)
    private String treasuryCode;

    @Column(name = "name", nullable = false, length = 200)
    private String name;         // e.g. "NeoBank Main Treasury"

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "balance", nullable = false, precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal balance = BigDecimal.ZERO;

    @Column(name = "total_disbursed", nullable = false, precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalDisbursed = BigDecimal.ZERO;

    @Column(name = "total_recovered", nullable = false, precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalRecovered = BigDecimal.ZERO;

    @Column(name = "total_interest_earned", nullable = false, precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalInterestEarned = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private TreasuryStatus status = TreasuryStatus.ACTIVE;

    @Column(name = "created_by", length = 100)
    private String createdBy;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public enum TreasuryStatus {
        ACTIVE, INACTIVE, FROZEN
    }

    // ── Helpers ──
    public boolean hasSufficientFunds(BigDecimal amount) {
        return this.balance.compareTo(amount) >= 0;
    }

    public void disburse(BigDecimal amount) {
        if (!hasSufficientFunds(amount)) {
            throw new IllegalStateException(
                "Treasury insufficient funds. Balance: ₹"
                + balance + " Required: ₹" + amount);
        }
        this.balance        = this.balance.subtract(amount);
        this.totalDisbursed = this.totalDisbursed.add(amount);
    }

    public void receive(BigDecimal principal, BigDecimal interest) {
        this.balance              = this.balance.add(principal).add(interest);
        this.totalRecovered       = this.totalRecovered.add(principal);
        this.totalInterestEarned  = this.totalInterestEarned.add(interest);
    }

    public void topUp(BigDecimal amount) {
        this.balance = this.balance.add(amount);
    }
}