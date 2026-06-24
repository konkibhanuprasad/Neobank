package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class RevealCardDetailsRequestDTO {
    private String cardId;
    private String otp;
}

// RevealCardDetailsResponseDTO.java