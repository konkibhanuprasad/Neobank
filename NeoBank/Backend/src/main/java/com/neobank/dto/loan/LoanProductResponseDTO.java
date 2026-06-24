package com.neobank.dto.loan;

import lombok.*;
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class LoanProductResponseDTO {
    private Long    id;
    private String  productName;
    private String  description;
    private String  loanType;
    private String  minAmount;
    private String  maxAmount;
    private String  annualInterestRate;
    private String  allowedTenures;
    private Boolean incomeProofRequired;
    private Boolean addressProofRequired;
    private Boolean propertyDocRequired;
    private Boolean vehicleDocRequired;
    private Boolean bankStatementRequired;
    private Boolean isActive;
    private String  createdBy;
    private String  createdAt;
    private String  updatedAt;
}

// ── Update LoanApplicationRequestDTO.java ──