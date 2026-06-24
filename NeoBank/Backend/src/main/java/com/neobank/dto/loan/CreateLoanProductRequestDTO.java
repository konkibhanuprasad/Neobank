// ── CreateLoanProductRequestDTO.java ──
package com.neobank.dto.loan;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class CreateLoanProductRequestDTO {
    private String productName;
    private String description;
    private String loanType;            // HOME/PERSONAL/VEHICLE/EDUCATION
    private String minAmount;           // "50000"
    private String maxAmount;           // "5000000"
    private String annualInterestRate;  // "10.5"
    private String allowedTenures;      // "12,24,36,60"
    private Boolean incomeProofRequired;
    private Boolean addressProofRequired;
    private Boolean propertyDocRequired;
    private Boolean vehicleDocRequired;
    private Boolean bankStatementRequired;
}

// ── LoanProductResponseDTO.java ──