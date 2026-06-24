package com.neobank.util;

import java.time.LocalDate;

public class DateRangeUtil {

	private DateRangeUtil() {
	}

	public static LocalDate getStartDate(String timeframe) {
		if (timeframe == null) {
			throw new IllegalArgumentException("Timeframe is required");
		}

		LocalDate today = LocalDate.now();

		return switch (timeframe.toUpperCase()) {
		case "7D" -> today.minusDays(7);
		case "30D" -> today.minusDays(30);
		case "YTD" -> LocalDate.of(today.getYear(), 1, 1);
		default -> throw new IllegalArgumentException("Invalid timeframe. Allowed values: 7d, 30d, YTD");
		};

	}

	 public static LocalDate getEndDate() {
	        return LocalDate.now();
	    }

}