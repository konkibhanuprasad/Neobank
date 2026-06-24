// CardResponseDTO.java
package com.neobank.dto.card;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class CardResponseDTO {
    private Long    id;
    private String  maskedCardNumber;   // **** **** **** 1234
    private String  last4;              // 1234
    private String  cardholderName;
    private String  expiryDisplay;      // MM/YY
    private String  network;            // RUPAY / VISA
    private String  status;
    private String  blockReason;
    private Boolean pinSet;
    private Boolean pinLocked;
    private Boolean replacementRequested;
    private String  replacementReason;
    private String  onlineLimit;
    private String  atmLimit;
    private String  dailyLimit;
    private String  accountNumber;
    private String  accountType;
    private String  issuedAt;
    private String  lastUsedAt;
    private String  expiryDate;         // full date for logic
 // Add to CardResponseDTO.java:
    private String requestStatus;     // PENDING / APPROVED / REJECTED
    private String requestReason;
    private String rejectionReason;
}

// CardTransactionResponseDTO.java