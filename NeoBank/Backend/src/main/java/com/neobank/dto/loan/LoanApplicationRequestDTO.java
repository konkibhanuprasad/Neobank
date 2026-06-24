package com.neobank.dto.loan;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class LoanApplicationRequestDTO {
    private Long    productId;          // ← NEW: product-based
    private String  loanType;           // ← KEPT: fallback if no productId
    private String  accountNumber;
    private String  principalAmount;
    private Integer tenureMonths;
    private String  purpose;
}

// ── ManualEmiPaymentRequestDTO.java ──