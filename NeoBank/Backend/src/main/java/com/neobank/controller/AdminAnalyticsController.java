package com.neobank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.dto.Analytics.AdminLoanAnalyticsResponse;
import com.neobank.dto.Analytics.AdminTransactionAnalyticsResponse;
import com.neobank.service.AdminAnalyticService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/admin/analytics")
@AllArgsConstructor
public class AdminAnalyticsController {

	@Autowired
	private final AdminAnalyticService adminAnalyticsService;

	@GetMapping("/transactions")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<AdminTransactionAnalyticsResponse> getTransactionAnalytics(
			@RequestParam(defaultValue = "7d") String timeframe) {
		return ResponseEntity.ok(adminAnalyticsService.getTransactionAnalytics(timeframe));
	}

	@GetMapping("/loans")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<AdminLoanAnalyticsResponse> getLoanAnalytics(
			@RequestParam(defaultValue = "7d") String timeframe) {
		return ResponseEntity.ok(adminAnalyticsService.getLoanAnalytics(timeframe));
	}

}
