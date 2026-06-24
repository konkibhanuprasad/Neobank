package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class SetCardPinRequestDTO {
    private String cardId;
    private String otp;
    private String newPin;        // 4 digits
    private String confirmPin;
}

// ReplacementRequestDTO.java