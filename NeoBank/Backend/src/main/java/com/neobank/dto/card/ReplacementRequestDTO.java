package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class ReplacementRequestDTO {
    private String cardId;
    private String reason;
}

// CardTransferRequestDTO.java