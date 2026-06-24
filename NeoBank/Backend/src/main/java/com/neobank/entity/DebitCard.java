// src/main/java/com/neobank/entity/DebitCard.java

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
    name = "debit_cards",
    indexes = {
        @Index(name = "idx_card_number",  columnList = "card_number",  unique = true),
        @Index(name = "idx_card_account", columnList = "account_id"),
        @Index(name = "idx_card_user",    columnList = "user_id"),
        @Index(name = "idx_card_status",  columnList = "status"),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class DebitCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 16-digit card number
    @Column(name = "card_number", unique = true, nullable = false, length = 16)
    private String cardNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Cardholder name (from user.fullName at time of issue)
    @Column(name = "cardholder_name", nullable = false, length = 100)
    private String cardholderName;

    // CVV stored as BCrypt hash — never returned in plain text
    @Column(name = "cvv_hash", nullable = false, length = 100)
    private String cvvHash;

    // Expiry = issued date + 3 years
    @Column(name = "expiry_date", nullable = false)
    private LocalDate expiryDate;

    // PIN stored as BCrypt hash
    @Column(name = "pin_hash", length = 100)
    private String pinHash;

    @Column(name = "pin_set")
    @Builder.Default
    private Boolean pinSet = false;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private CardStatus status = CardStatus.ACTIVE;

    @Column(name = "block_reason", length = 200)
    private String blockReason;

    // Transaction limits
    @Column(name = "online_limit", nullable = false, precision = 12, scale = 2)
    @Builder.Default
    private BigDecimal onlineLimit = new BigDecimal("25000");  // ₹25,000

    @Column(name = "atm_limit", nullable = false, precision = 12, scale = 2)
    @Builder.Default
    private BigDecimal atmLimit = new BigDecimal("10000");     // ₹10,000

    @Column(name = "daily_limit", nullable = false, precision = 12, scale = 2)
    @Builder.Default
    private BigDecimal dailyLimit = new BigDecimal("50000");   // ₹50,000

    // Network (VISA/MASTERCARD/RUPAY)
    @Enumerated(EnumType.STRING)
    @Column(name = "network", nullable = false, length = 15)
    @Builder.Default
    private CardNetwork network = CardNetwork.RUPAY;

    // Replacement tracking
    @Column(name = "replacement_requested")
    @Builder.Default
    private Boolean replacementRequested = false;

    @Column(name = "replacement_reason", length = 300)
    private String replacementReason;

    @Column(name = "replaced_by_card_id")
    private Long replacedByCardId;

    // Failed PIN attempts
    @Column(name = "failed_pin_attempts")
    @Builder.Default
    private Integer failedPinAttempts = 0;

    @Column(name = "pin_locked_until")
    private LocalDateTime pinLockedUntil;

    @Column(name = "issued_at")
    private LocalDateTime issuedAt;

    @Column(name = "last_used_at")
    private LocalDateTime lastUsedAt;

    @Column(name = "blocked_at")
    private LocalDateTime blockedAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    
 // Add to DebitCard.java entity (inside class):

 // ── Admin approval flow ──
 @Enumerated(EnumType.STRING)
 @Column(name = "request_status", nullable = false, length = 20)
 @Builder.Default
 private CardRequestStatus requestStatus = CardRequestStatus.PENDING;

 @Column(name = "request_reason", length = 300)
 private String requestReason;      // why customer wants card

 @Column(name = "reviewed_by", length = 100)
 private String reviewedBy;

 @Column(name = "reviewed_at")
 private LocalDateTime reviewedAt;

 @Column(name = "rejection_reason", length = 300)
 private String rejectionReason;

 // ── CVV reveal tracking ──
 @Column(name = "cvv_reveal_count")
 @Builder.Default
 private Integer cvvRevealCount = 0;

 @Column(name = "last_cvv_revealed_at")
 private LocalDateTime lastCvvRevealedAt;

 public enum CardRequestStatus {
     PENDING,   // submitted, waiting admin review
     APPROVED,  // admin approved → card active
     REJECTED   // admin rejected
 }

    // ── Enums ──
 public enum CardStatus {
	    PENDING_APPROVAL,   // ← new: waiting admin review
	    ACTIVE,
	    BLOCKED,
	    EXPIRED,
	    CANCELLED,
	    REPLACEMENT_PENDING
	}

    public enum CardNetwork {
        VISA, MASTERCARD, RUPAY
    }

    // ── Helpers ──
    public boolean isExpired() {
        return LocalDate.now().isAfter(expiryDate);
    }

    public boolean isPinLocked() {
        return pinLockedUntil != null &&
               LocalDateTime.now().isBefore(pinLockedUntil);
    }

    public void incrementFailedPin() {
        this.failedPinAttempts++;
        if (this.failedPinAttempts >= 3) {
            this.pinLockedUntil = LocalDateTime.now().plusHours(24);
        }
    }

    public void resetPinAttempts() {
        this.failedPinAttempts = 0;
        this.pinLockedUntil    = null;
    }

    // Masked card number: **** **** **** 1234
    public String getMaskedCardNumber() {
        if (cardNumber == null || cardNumber.length() != 16) return "****";
        return "**** **** **** " + cardNumber.substring(12);
    }

    // Display expiry MM/YY
    public String getDisplayExpiry() {
        if (expiryDate == null) return null;
        return String.format("%02d/%02d",
                expiryDate.getMonthValue(),
                expiryDate.getYear() % 100);
    }
}