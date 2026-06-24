package com.neobank.dto.Analytics;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class WealthAnalyticsResponse {

	private Long userId;
	private List<NetWorthPoint> netWorthTimeline;
	private List<LoanPayoffForecast> loanPayoffForecast;
	private List<RewardPointHistory> rewardAccrualHistory;

}
