package com.neobank.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neobank.dto.Analytics.AdminLoanAnalyticsResponse;
import com.neobank.dto.Analytics.AdminTransactionAnalyticsResponse;
import com.neobank.dto.Analytics.DailyTransactionVolume;
import com.neobank.repository.LoanApplicationRepository;
import com.neobank.repository.TransactionAnalyticRepository;
import com.neobank.util.DateRangeUtil;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminAnalyticService {

	@Autowired
	private final TransactionAnalyticRepository transactionRepository;

	@Autowired
	private final LoanApplicationRepository loanApplicationRepository;

	@Transactional(readOnly = true)
	public AdminTransactionAnalyticsResponse getTransactionAnalytics(String timeframe) {

		LocalDate startDate = DateRangeUtil.getStartDate(timeframe);
		LocalDate endDate = DateRangeUtil.getEndDate();

		LocalDateTime startDateTime = startDate.atStartOfDay();
		LocalDateTime endDateTime = endDate.atTime(23, 59, 59);

		List<Object[]> rows = transactionRepository.findDailyTransactionVolumesRaw(startDateTime, endDateTime);

		List<DailyTransactionVolume> dailyVolumes = new java.util.ArrayList<>();

		for (Object[] row : rows) {
			DailyTransactionVolume volume = new DailyTransactionVolume();

			volume.setDate(String.valueOf(row[0]));
			volume.setInflow(toBigDecimal(row[1]));
			volume.setOutflow(toBigDecimal(row[2]));
			volume.setTransactionCount(((Number) row[3]).longValue());

			dailyVolumes.add(volume);
		}

		BigDecimal totalInflow = transactionRepository.getTotalInflow(startDateTime, endDateTime);
		BigDecimal totalOutflow = transactionRepository.getTotalOutflow(startDateTime, endDateTime);
		BigDecimal averageTicketSize = transactionRepository.getAverageTicketSize(startDateTime, endDateTime);

		AdminTransactionAnalyticsResponse response = new AdminTransactionAnalyticsResponse();

		response.setDailyVolumes(dailyVolumes);
		response.setTotalInflow(safeAmount(totalInflow));
		response.setTotalOutflow(safeAmount(totalOutflow));
		response.setAverageTicketSize(safeAmount(averageTicketSize));

		return response;
	}

	private BigDecimal toBigDecimal(Object value) {
		if (value == null)
			return BigDecimal.ZERO;

		if (value instanceof BigDecimal bigDecimal) {
			return bigDecimal;
		}

		return new BigDecimal(value.toString());
	}

	private BigDecimal safeAmount(BigDecimal value) {
		return value == null ? BigDecimal.ZERO : value;
	}

	@Transactional(readOnly = true)
	public AdminLoanAnalyticsResponse getLoanAnalytics(String timeframe) {

		LocalDate startDate = DateRangeUtil.getStartDate(timeframe);
		LocalDate endDate = DateRangeUtil.getEndDate();


		LocalDateTime startDateTime = startDate.atStartOfDay();
		LocalDateTime endDateTime = endDate.atTime(23, 59, 59);

		Map<String, Long> statusDistribution = new HashMap<>();
		List<Object[]> statusRows = loanApplicationRepository.countLoansByStatus(startDateTime, endDateTime);

		for (Object[] row : statusRows) {
			statusDistribution.put(String.valueOf(row[0]), (Long) row[1]);
		}

		Map<String, Long> productDistribution = new HashMap<>();
		List<Object[]> productRows = loanApplicationRepository.countLoansByProduct(startDateTime, endDateTime);

		for (Object[] row : productRows) {
			productDistribution.put(String.valueOf(row[0]), (Long) row[1]);
		}

		Long totalLoans = loanApplicationRepository.countLoansInRange(startDateTime, endDateTime);
		Long npaCount = loanApplicationRepository.countOverdueLoans(startDateTime, endDateTime);

		BigDecimal npaRatio = BigDecimal.ZERO;

		if (totalLoans != null && totalLoans > 0) {
			npaRatio = BigDecimal.valueOf(npaCount).multiply(BigDecimal.valueOf(100))
					.divide(BigDecimal.valueOf(totalLoans), 2, RoundingMode.HALF_UP);
		}

		AdminLoanAnalyticsResponse response = new AdminLoanAnalyticsResponse();

		response.setLoanDistributionByStatus(statusDistribution);
		response.setLoanDistributionByProduct(productDistribution);
		response.setTotalLoans(totalLoans);
		response.setNpaCount(npaCount);
		response.setNpaRatio(npaRatio);

		return response;
	}
}