package com.neobank.repository;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neobank.entity.SystemAuditLog;

@Repository
public interface SystemAuditLogRepository extends JpaRepository<SystemAuditLog, Long> {

	Page<SystemAuditLog> findByEventTimestampBetween(LocalDateTime from,
			LocalDateTime to,
			Pageable pageable);

	Page<SystemAuditLog> findByResponseStatusAndEventTimestampBetween(Integer responseStatus,
			LocalDateTime from,
			LocalDateTime to,
			Pageable pageable);

}
