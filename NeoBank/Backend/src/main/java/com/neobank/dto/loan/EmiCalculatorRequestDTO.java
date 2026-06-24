package com.neobank.dto.loan;

import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class EmiCalculatorRequestDTO {
    private String  principal;
    private String  annualRate;
    private Integer tenureMonths;
}

// EmiCalculatorResponseDTO.java