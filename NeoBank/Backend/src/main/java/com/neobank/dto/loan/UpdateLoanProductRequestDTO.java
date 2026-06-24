package com.neobank.dto.loan;

import lombok.*;
@Data @NoArgsConstructor @AllArgsConstructor
public class UpdateLoanProductRequestDTO {
    private String  productName;
    private String  description;
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
}