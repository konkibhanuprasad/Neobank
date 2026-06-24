package com.neobank.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neobank.dto.Analytics.CategorySpending;
import com.neobank.dto.Analytics.LoanPayoffForecast;
import com.neobank.dto.Analytics.NetWorthPoint;
import com.neobank.dto.Analytics.RewardPointHistory;
import com.neobank.dto.Analytics.SpendingAnalyticsResponse;
import com.neobank.dto.Analytics.WealthAnalyticsResponse;
import com.neobank.repository.AccountAnalyticRepository;
import com.neobank.repository.LoanApplicationRepository;
import com.neobank.repository.RewardPointRepository;
import com.neobank.repository.TransactionAnalyticRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserAnalyticsService {

	private final TransactionAnalyticRepository transactionRepository;
	private final AccountAnalyticRepository accountRepository;
	private final LoanApplicationRepository loanApplicationRepository;
	private final RewardPointRepository rewardPointRepository;

	@Transactional(readOnly = true)
	public SpendingAnalyticsResponse getSpendingAnalytics(Long userId, Integer months) {

		LocalDate startDate = LocalDate.now().minusMonths(months).withDayOfMonth(1);
		LocalDate endDate = LocalDate.now();

		LocalDateTime startDateTime = startDate.atStartOfDay();
		LocalDateTime endDateTime = endDate.atTime(23, 59, 59);

		List<Object[]> rows = transactionRepository.findDailyTransactionVolumesRaw(

				startDateTime, endDateTime);

		List<CategorySpending> data = new ArrayList<>();

		for (Object[] row : rows) {
			CategorySpending spending = new CategorySpending();

			spending.setMonth(String.valueOf(row[0]));
			spending.setCategory(String.valueOf(row[1]));
			spending.setAmount(toBigDecimal(row[2]));

			data.add(spending);
		}

		SpendingAnalyticsResponse response = new SpendingAnalyticsResponse();

		response.setUserId(userId);
		response.setMonths(months);
		response.setCategorySpending(data);

		return response;
	}

	@Transactional(readOnly = true)
	public WealthAnalyticsResponse getWealthAnalytics(Long userId) {

	    List<NetWorthPoint> netWorthTimeline = buildNetWorthTimeline(userId);

	    List<Object[]> payoffRows =
	            loanApplicationRepository.findLoanPayoffForecasts(userId);

	    List<LoanPayoffForecast> payoffForecasts = new java.util.ArrayList<>();

	    for (Object[] row : payoffRows) {
	        LoanPayoffForecast forecast = new LoanPayoffForecast();

	        forecast.setLoanId(((Number) row[0]).longValue());
	        forecast.setOutstandingPrincipal(toBigDecimal(row[1]));
	        forecast.setMonthsRemaining(row[2] == null ? 0 : ((Number) row[2]).intValue());

	        if (row[3] != null) {
	            forecast.setProjectedPayoffDate(
	                    ((java.sql.Date) row[3]).toLocalDate()
	            );
	        }

	        payoffForecasts.add(forecast);
	    }

	    List<Object[]> rewardRows =
	            rewardPointRepository.findRewardPointHistoryRaw(userId);

	    List<RewardPointHistory> rewardHistory = new java.util.ArrayList<>();

	    for (Object[] row : rewardRows) {
	        RewardPointHistory history = new RewardPointHistory();

	        history.setMonth(String.valueOf(row[0]));
	        history.setPoint(row[1] == null ? 0L : ((Number) row[1]).longValue());

	        rewardHistory.add(history);
	    }

	    WealthAnalyticsResponse response = new WealthAnalyticsResponse();

	    response.setUserId(userId);
	    response.setNetWorthTimeline(netWorthTimeline);
	    response.setLoanPayoffForecast(payoffForecasts);
	    response.setRewardAccrualHistory(rewardHistory);

	    return response;
	}
	private List<NetWorthPoint> buildNetWorthTimeline(Long userId) {

		List<NetWorthPoint> timeline = new ArrayList<>();

		for (int i = 0; i <= 5; i++) {

			YearMonth month = YearMonth.now().minusMonths(5 - i);

			BigDecimal totalBalance = accountRepository.getTotalBalanceByUserId(userId);

			BigDecimal outstandingPrincipal = loanApplicationRepository.getOutstandingPrincipalByUserId(userId);

			if (totalBalance == null) {
				totalBalance = BigDecimal.ZERO;
			}

			if (outstandingPrincipal == null) {
				outstandingPrincipal = BigDecimal.ZERO;
			}

			BigDecimal netWorth = totalBalance.subtract(outstandingPrincipal);

			NetWorthPoint point = new NetWorthPoint();

			point.setMonth(month.toString());
			point.setTotalBalance(totalBalance);
			point.setOutstandingPrincipal(outstandingPrincipal);
			point.setNetWorth(netWorth);

			timeline.add(point);
		}

		return timeline;
	}

	private BigDecimal toBigDecimal(Object value) {

		if (value == null) {
			return BigDecimal.ZERO;
		}

		if (value instanceof BigDecimal bigDecimal) {
			return bigDecimal;
		}

		return new BigDecimal(value.toString());
	}
}