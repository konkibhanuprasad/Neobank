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
public class CategorySpending {

	private String month;
	private String category;
	private BigDecimal amount;

}
