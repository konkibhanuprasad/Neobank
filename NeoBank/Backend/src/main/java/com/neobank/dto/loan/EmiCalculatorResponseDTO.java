package com.neobank.dto.loan;

import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class EmiCalculatorResponseDTO {
    private String  emiAmount;
    private String  totalInterest;
    private String  totalPayable;
    private String  principal;
    private String  annualRate;
    private Integer tenureMonths;
}