package com.neobank.dto.treasury;

import lombok.*;
@Data @NoArgsConstructor @AllArgsConstructor
public class CreateTreasuryRequestDTO {
    private String name;
    private String description;
    private String initialBalance;   // opening balance
}

// src/main/java/com/neobank/dto/treasury/TopUpTreasuryRequestDTO.java