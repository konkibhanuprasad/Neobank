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
public class SpendingAnalyticsResponse {

	private Long userId;
	private Integer months;
	private List<CategorySpending> categorySpending;

}
