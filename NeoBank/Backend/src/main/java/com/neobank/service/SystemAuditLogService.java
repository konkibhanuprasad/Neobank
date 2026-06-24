package com.neobank.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.neobank.entity.SystemAuditLog;
import com.neobank.repository.SystemAuditLogRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class SystemAuditLogService {

	@Autowired
	private final SystemAuditLogRepository systemAuditLogRepository;

	@Async
	public void saveLog(SystemAuditLog log) {
		systemAuditLogRepository.save(log);
	}

	public Page<SystemAuditLog> getLogs(LocalDateTime from, 
			LocalDateTime to, 
			Integer status, 
			Pageable pageable) {
		if (status != null) {
			return systemAuditLogRepository.findByResponseStatusAndEventTimestampBetween(status, from, to, pageable);
		}

		return systemAuditLogRepository.findByEventTimestampBetween(from, to, pageable);
	}

}
