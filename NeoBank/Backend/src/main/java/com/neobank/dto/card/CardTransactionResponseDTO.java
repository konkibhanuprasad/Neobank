package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class CardTransactionResponseDTO {
    private Long   id;
    private String referenceNumber;
    private String transactionType;
    private String merchantName;
    private String description;
    private String amount;
    private String currency;
    private String status;
    private String beneficiaryName;
    private String beneficiaryCardNumber;
    private String balanceBefore;
    private String balanceAfter;
    private String transactionRef;
    private String createdAt;
}

// IssueCardRequestDTO.java