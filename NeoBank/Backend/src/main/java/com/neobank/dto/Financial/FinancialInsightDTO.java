package com.neobank.dto.Financial;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter

public class FinancialInsightDTO {

	private BigDecimal totalIncome;
	private BigDecimal totalExpense;
	private BigDecimal savings;
	private List<TrendEntryDTO> trendSummary;

	private List<Object> categoryBreakdown;
	private List<Object> budgetComparison;
	private List<Object> netWorthHistory;
	private List<Object> rewardHistory;
	private List<Object> loanPayoffForecast;

}
