package com.neobank.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "system_audit_log")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SystemAuditLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "endpoint", nullable = false, length = 500)
	private String endpoint;

	@Column(name = "http_method", nullable = false, length = 10)
	private String httpMethod;

	@Column(name = "response_status", nullable = false)
	private Integer responseStatus;

	@Column(name = "execution_time_ms", nullable = false)
	private Long executionTimeMs;

	@Column(name = "acting_user_id")
	private Long actingUserId;

	@Column(name = "event_timestamp")
	private LocalDateTime eventTimestamp;

	@Column(name = "error_message", length = 1000)
	private String errorMessage;

	@PrePersist
	public void prePersist() {
		if (eventTimestamp == null) {
			eventTimestamp = LocalDateTime.now();
		}
	}

}
