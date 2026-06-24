package com.neobank.dto.loan;

import lombok.*;
@Data @NoArgsConstructor @AllArgsConstructor
public class ManualEmiPaymentRequestDTO {
    private String note;   // optional note for payment
}

// ── UpdateLoanProductRequestDTO.java ──