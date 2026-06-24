package com.neobank.dto.loan;

import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class RejectLoanRequestDTO {
    private String reason;
}

// ForeclosureRequestDTO.java