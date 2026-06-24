package com.neobank.dto.loan;

import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class LoanEmiResponseDTO {
    private Long    id;
    private Integer emiNumber;
    private String  dueDate;
    private String  emiAmount;
    private String  principalComponent;
    private String  interestComponent;
    private String  outstandingAfter;
    private String  status;    // PENDING / PAID / OVERDUE / WAIVED
    private String  paidAt;
    private String  transactionRef;
}

// ApproveLoanRequestDTO.java