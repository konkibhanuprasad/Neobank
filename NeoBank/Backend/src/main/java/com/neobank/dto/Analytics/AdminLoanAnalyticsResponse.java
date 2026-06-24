package com.neobank.dto.Analytics;

import java.math.BigDecimal;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminLoanAnalyticsResponse {

	private BigDecimal npaRatio;
	private Long npaCount;

	private Map<String, Long> loanDistributionByStatus;
	private Map<String, Long> loanDistributionByProduct;
	private Long totalLoans;

}
