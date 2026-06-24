package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminCardResponseDTO {
    private Long    id;
    private String  maskedCardNumber;
    private String  last4;
    private String  cardholderName;
    private String  expiryDisplay;
    private String  network;
    private String  status;
    private String  requestStatus;
    private String  requestReason;
    private String  blockReason;
    private String  rejectionReason;
    private String  reviewedBy;
    private String  reviewedAt;
    private Boolean pinSet;
    private String  onlineLimit;
    private String  atmLimit;
    private String  dailyLimit;
    private String  accountNumber;
    private String  accountType;
    // Customer info
    private String  customerUsername;
    private String  customerFullName;
    private String  customerEmail;
    private String  customerPhone;
    private String  issuedAt;
    private String  lastUsedAt;
    private String  createdAt;
}