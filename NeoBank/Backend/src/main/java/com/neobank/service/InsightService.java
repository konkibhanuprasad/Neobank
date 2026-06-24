package com.neobank.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neobank.dto.Financial.FinancialInsightDTO;
import com.neobank.dto.Financial.TrendEntryDTO;
import com.neobank.entity.Transaction.TransactionStatus;
import com.neobank.repository.InsightRepository;


@Service
@Transactional(readOnly = true)
public class InsightService {
	
	@Autowired
	private InsightRepository repo;
	
	public FinancialInsightDTO buildInsight(Long userId) {
		BigDecimal income  = repo.getTotalIncome(userId, TransactionStatus.SUCCESS);
		BigDecimal expense = repo.getTotalExpense(userId, TransactionStatus.SUCCESS);

		// Guard against null when no transactions exist
		if (income == null)  income  = BigDecimal.ZERO;
		if (expense == null) expense = BigDecimal.ZERO;

		BigDecimal savings = income.subtract(expense);


		// Mock Data for Income vs Expense Trend
		List<TrendEntryDTO> trend = java.util.List.of(
			new TrendEntryDTO(2026, 1, new BigDecimal("4500"), new BigDecimal("3200")),
			new TrendEntryDTO(2026, 2, new BigDecimal("4800"), new BigDecimal("2900")),
			new TrendEntryDTO(2026, 3, new BigDecimal("5100"), new BigDecimal("4100")),
			new TrendEntryDTO(2026, 4, new BigDecimal("4900"), new BigDecimal("3500")),
			new TrendEntryDTO(2026, 5, new BigDecimal("5500"), new BigDecimal("4800")),
			new TrendEntryDTO(2026, 6, new BigDecimal("6000"), new BigDecimal("4200"))
		);


		FinancialInsightDTO dto = new FinancialInsightDTO();
		dto.setTotalIncome(income);
		dto.setTotalExpense(expense);
		dto.setSavings(savings);
		dto.setTrendSummary(trend);

		// Mock Data for Spending Analytics
		List<Object> spending = java.util.List.of(
			java.util.Map.of("category", "Food", "amount", 1200),
			java.util.Map.of("category", "Transport", "amount", 400),
			java.util.Map.of("category", "Utilities", "amount", 800),
			java.util.Map.of("category", "Shopping", "amount", 1500)
		);
		dto.setCategoryBreakdown(spending);

		// Mock Data for Budget vs Actual
		List<Object> budget = java.util.List.of(
			java.util.Map.of("category", "Food", "budgetAmount", 1000, "actualAmount", 1200),
			java.util.Map.of("category", "Transport", "budgetAmount", 500, "actualAmount", 400),
			java.util.Map.of("category", "Utilities", "budgetAmount", 800, "actualAmount", 800)
		);
		dto.setBudgetComparison(budget);

		// Mock Data for Net Worth Progression
		List<Object> netWorth = java.util.List.of(
			java.util.Map.of("month", "Jan", "netWorth", 10000),
			java.util.Map.of("month", "Feb", "netWorth", 12000),
			java.util.Map.of("month", "Mar", "netWorth", 11500),
			java.util.Map.of("month", "Apr", "netWorth", 14000),
			java.util.Map.of("month", "May", "netWorth", 16000),
			java.util.Map.of("month", "Jun", "netWorth", 18500)
		);
		dto.setNetWorthHistory(netWorth);

		// Mock Data for Reward Growth
		List<Object> rewards = java.util.List.of(
			java.util.Map.of("month", "Jan", "points", 200),
			java.util.Map.of("month", "Feb", "points", 450),
			java.util.Map.of("month", "Mar", "points", 600),
			java.util.Map.of("month", "Apr", "points", 900),
			java.util.Map.of("month", "May", "points", 1200),
			java.util.Map.of("month", "Jun", "points", 1500)
		);
		dto.setRewardHistory(rewards);

		// Mock Data for Loan Payoff Forecast
		List<Object> loan = java.util.List.of(
			java.util.Map.of("month", "Jan", "remainingPrincipal", 50000),
			java.util.Map.of("month", "Feb", "remainingPrincipal", 48000),
			java.util.Map.of("month", "Mar", "remainingPrincipal", 46000),
			java.util.Map.of("month", "Apr", "remainingPrincipal", 43000),
			java.util.Map.of("month", "May", "remainingPrincipal", 40000),
			java.util.Map.of("month", "Jun", "remainingPrincipal", 37000)
		);
		dto.setLoanPayoffForecast(loan);

		return dto;
	}
}
