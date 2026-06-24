package com.neobank.dto.loan;

import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class LoanResponseDTO {
    private Long    id;
    private String  loanId;
    private String  loanType;
    private String  status;
    private String  purpose;
    private String  principalAmount;
    private String  interestRate;
    private Integer tenureMonths;
    private String  emiAmount;
    private String  outstandingBalance;
    private String  totalInterest;
    private String  totalPayable;
    private Integer emisPaid;
    private Integer emisOverdue;
    private Integer totalEmis;
    private String  disbursementDate;
    private String  nextEmiDate;
    private String  maturityDate;
    private String  rejectionReason;
    private String  reviewedBy;
    private String  reviewedAt;
    private Boolean foreclosureRequested;
    private String  foreclosureAmount;
    private String  accountNumber;
    private String  createdAt;
    private String  updatedAt;
    // base64 docs
    private String  incomeProofBase64;
    private String  incomeProofType;
    private String  addressProofBase64;
    private String  addressProofType;
    private String  propertyDocBase64;
    private String  propertyDocType;
    private String  vehicleDocBase64;
    private String  vehicleDocType;
    private String  bankStatementBase64;
    private String  bankStatementType;
    
 // Add to LoanResponseDTO.java:

    private String  treasuryCode;
    private String  treasuryName;
    private String  disbursementTransactionRef;
    
    
 // Add these fields to LoanResponseDTO:
    private Long   productId;
    private String productName;
}

// LoanEmiResponseDTO.java