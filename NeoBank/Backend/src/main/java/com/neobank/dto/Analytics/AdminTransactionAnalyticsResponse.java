package com.neobank.dto.Analytics;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminTransactionAnalyticsResponse {

	 private List<DailyTransactionVolume> dailyVolumes;
	    private BigDecimal averageTicketSize;
	    private BigDecimal totalInflow;
	    private BigDecimal totalOutflow;

}


