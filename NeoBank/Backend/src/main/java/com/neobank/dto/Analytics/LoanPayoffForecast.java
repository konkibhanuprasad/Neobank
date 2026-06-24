package com.neobank.dto.Analytics;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class LoanPayoffForecast {

	private Long loanId;
	private BigDecimal outstandingPrincipal;
	private Integer monthsRemaining;
	private LocalDate projectedPayoffDate;

}
