package com.neobank.dto.Analytics;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class NetWorthPoint {

	 private String month;
	        private BigDecimal totalBalance;
	        private BigDecimal outstandingPrincipal;
	        private BigDecimal netWorth;

}
