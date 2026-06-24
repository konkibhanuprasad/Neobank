// src/main/java/com/neobank/entity/CardTransaction.java

package com.neobank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "card_transactions",
    indexes = {
        @Index(name = "idx_ct_card",       columnList = "card_id"),
        @Index(name = "idx_ct_account",    columnList = "account_id"),
        @Index(name = "idx_ct_status",     columnList = "status"),
        @Index(name = "idx_ct_created",    columnList = "created_at"),
        @Index(name = "idx_ct_ref",        columnList = "reference_number", unique = true),
    }
)
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class CardTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reference_number", unique = true, nullable = false, length = 30)
    private String referenceNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id", nullable = false)
    private DebitCard card;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @Column(name = "amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal amount;

    @Column(name = "currency", length = 5)
    @Builder.Default
    private String currency = "INR";

    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_type", nullable = false, length = 20)
    private CardTransactionType transactionType;

    @Column(name = "merchant_name", length = 200)
    private String merchantName;

    @Column(name = "description", length = 500)
    private String description;

    // For card-to-card / card-to-account transfers
    @Column(name = "beneficiary_card_number", length = 16)
    private String beneficiaryCardNumber;

    @Column(name = "beneficiary_account_number", length = 30)
    private String beneficiaryAccountNumber;

    @Column(name = "beneficiary_name", length = 100)
    private String beneficiaryName;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private CardTxnStatus status = CardTxnStatus.SUCCESS;

    @Column(name = "failure_reason", length = 200)
    private String failureReason;

    @Column(name = "balance_before", precision = 15, scale = 2)
    private BigDecimal balanceBefore;

    @Column(name = "balance_after", precision = 15, scale = 2)
    private BigDecimal balanceAfter;

    // Links to main transaction table
    @Column(name = "transaction_ref", length = 30)
    private String transactionRef;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
 // Add/update in CardTransaction.java:

 // Sender card details (for bank transfer via card)
 @Column(name = "sender_card_number", length = 16)
 private String senderCardNumber;

 @Column(name = "sender_name", length = 100)
 private String senderName;

 // Receiver bank details (for card → bank transfer)
 @Column(name = "receiver_account_number", length = 30)
 private String receiverAccountNumber;

 @Column(name = "receiver_ifsc", length = 15)
 private String receiverIfsc;

 @Column(name = "receiver_name", length = 100)
 private String receiverName;

 // Add new type to enum:
 public enum CardTransactionType {
     ONLINE_PURCHASE,
     ATM_WITHDRAWAL,
     POS,
     CARD_TRANSFER,      // card → card (existing)
     CARD_BANK_TRANSFER, // card → bank account (new)
     REFUND
 }

    // ── Enums ──
//    public enum CardTransactionType {
//        ONLINE_PURCHASE,    // e-commerce / online payment
//        ATM_WITHDRAWAL,     // ATM cash
//        POS,                // Point of sale (swipe)
//        CARD_TRANSFER,      // card-to-card / card-to-account transfer
//        REFUND              // refund to card
//    }

    public enum CardTxnStatus {
        SUCCESS, FAILED, REVERSED
    }
}