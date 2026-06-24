package com.neobank.dto.Analytics;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DailyTransactionVolume {

	private String date;
	private BigDecimal inflow;
	private BigDecimal outflow;
	private Long transactionCount;

}
