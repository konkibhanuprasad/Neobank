package com.neobank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.dto.Financial.FinancialInsightDTO;
import com.neobank.entity.User;
import com.neobank.repository.UserRepository;
import com.neobank.service.InsightService;

@RestController
@RequestMapping("/api/insights")
public class InsightController {

	@Autowired
	private InsightService service;

	@Autowired
	private UserRepository userRepo;

	@GetMapping("/{userId}")
	@PreAuthorize("isAuthenticated()")
	public ResponseEntity<FinancialInsightDTO> getInsights(@PathVariable Long userId, Authentication authentication) {

		String username = authentication.getName();

		User loggedInUser = userRepo.findByUsername(username)
				.orElseThrow(() -> new RuntimeException("Logged-in user not found"));

		if (!loggedInUser.getId().equals(userId)) {
			return ResponseEntity.status(403).build();
		}

		return ResponseEntity.ok(service.buildInsight(userId));
	}

}
