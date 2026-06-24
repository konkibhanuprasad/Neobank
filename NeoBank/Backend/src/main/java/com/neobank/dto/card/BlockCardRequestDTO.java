package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class BlockCardRequestDTO {
    private String cardId;
    private String reason;
}

// UpdateLimitsRequestDTO.java