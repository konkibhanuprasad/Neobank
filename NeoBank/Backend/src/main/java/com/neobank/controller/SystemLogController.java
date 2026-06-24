package com.neobank.controller;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.entity.SystemAuditLog;
import com.neobank.service.SystemAuditLogService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/admin/system-logs")
@AllArgsConstructor
public class SystemLogController {

	private final SystemAuditLogService systemAuditLogService;

	@GetMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Page<SystemAuditLog>> getSystemLogs(
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime from,

			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime to,

			@RequestParam(required = false) Integer status,

			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
		LocalDateTime defaultFrom = from != null ? from : LocalDateTime.now().minusDays(7);
		LocalDateTime defaultTo = to != null ? to : LocalDateTime.now();

		PageRequest pageRequest = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "eventTimestamp"));

		return ResponseEntity.ok(systemAuditLogService.getLogs(defaultFrom, defaultTo, status, pageRequest));

	}
}
