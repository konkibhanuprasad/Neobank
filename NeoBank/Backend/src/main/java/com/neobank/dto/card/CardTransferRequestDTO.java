package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class CardTransferRequestDTO {
    private String  senderCardNumber;     // 16-digit card number
    private String  beneficiaryCardNumber; // receiver card number
    private String  amount;
    private String  cardPin;              // sender's card PIN
    private String  otp;                  // OTP for verification
    private String  description;
}