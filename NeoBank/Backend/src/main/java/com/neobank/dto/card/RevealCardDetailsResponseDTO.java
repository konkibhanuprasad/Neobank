package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class RevealCardDetailsResponseDTO {
    private String cardNumber;   // full 16-digit number
    private String cvv;          // 3-digit CVV (decrypted)
    private String expiryDisplay;
    private String cardholderName;
    private String network;
}

// ChangeCardPinRequestDTO.java (OTP-based)