package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class UpdateLimitsRequestDTO {
    private String onlineLimit;
    private String atmLimit;
    private String dailyLimit;
}

// SetCardPinRequestDTO.java