package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class CardBankTransferRequestDTO {
    // Sender card details
    private String senderCardNumber;
    private String senderCardholderName;
    private String senderExpiry;     // MM/YY
    private String senderCvv;        // 3-digit

    // Receiver bank details
    private String receiverAccountNumber;
    private String receiverIfsc;
    private String receiverName;

    // Transfer details
    private String  amount;
    private String  otp;
    private String  description;
}

// AdminCardResponseDTO.java (admin view — full details)