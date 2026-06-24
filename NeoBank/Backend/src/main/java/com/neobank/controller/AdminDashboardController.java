package com.neobank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.dto.admin.AdminDashboardDTO;
import com.neobank.service.AdminDashboardService;

@RestController
@RequestMapping("/api/admin")
public class AdminDashboardController {
	
	@Autowired
	private AdminDashboardService service;
	

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<AdminDashboardDTO> getDashBoard(){
		return ResponseEntity.ok(service.getDahsboard());
	}

}
