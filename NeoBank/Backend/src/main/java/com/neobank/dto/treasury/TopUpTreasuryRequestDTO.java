package com.neobank.dto.treasury;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class TopUpTreasuryRequestDTO {
    private String amount;
    private String description;
}