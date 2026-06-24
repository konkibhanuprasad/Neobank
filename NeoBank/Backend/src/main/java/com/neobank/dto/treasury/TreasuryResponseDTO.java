// src/main/java/com/neobank/dto/treasury/TreasuryResponseDTO.java
package com.neobank.dto.treasury;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class TreasuryResponseDTO {
    private Long   id;
    private String treasuryCode;
    private String name;
    private String description;
    private String balance;
    private String totalDisbursed;
    private String totalRecovered;
    private String totalInterestEarned;
    private String status;
    private String createdBy;
    private String createdAt;
    private String updatedAt;
}

// src/main/java/com/neobank/dto/treasury/CreateTreasuryRequestDTO.java