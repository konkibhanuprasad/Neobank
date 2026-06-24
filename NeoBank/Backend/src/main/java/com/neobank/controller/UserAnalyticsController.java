package com.neobank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.dto.Analytics.SpendingAnalyticsResponse;
import com.neobank.dto.Analytics.WealthAnalyticsResponse;
import com.neobank.service.UserAnalyticsService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/analytics")
@AllArgsConstructor
public class UserAnalyticsController {

	@Autowired
	private final UserAnalyticsService userAnalyticsService;

	@GetMapping("/spending/{userId}")
	public ResponseEntity<SpendingAnalyticsResponse> getSpendingAnalytics(@PathVariable Long userId,
			@RequestParam(defaultValue = "6") Integer months) {
		/*
		 * Add JWT userId validation here. If requested userId != logged-in userId,
		 * return 403.
		 */

		return ResponseEntity.ok(userAnalyticsService.getSpendingAnalytics(userId, months));
	}

	@GetMapping("/wealth/{userId}")
	public ResponseEntity<WealthAnalyticsResponse> getWealthAnalytics(@PathVariable Long userId) {
		/*
		 * Add JWT userId validation here. If requested userId != logged-in userId,
		 * return 403.
		 */

		return ResponseEntity.ok(userAnalyticsService.getWealthAnalytics(userId));
	}

}
