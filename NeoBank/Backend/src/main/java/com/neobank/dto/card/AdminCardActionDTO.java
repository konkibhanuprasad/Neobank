package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class AdminCardActionDTO {
    private String rejectionReason; // only for reject
}

// RevealCardDetailsRequestDTO.java