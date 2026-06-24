package com.neobank.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "reward_points", indexes = { @Index(name = "idx_reward_user_id", columnList = "user_id"),
		@Index(name = "idx_reward_created_at", columnList = "created_at") })
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RewardPoint {
	// ─────────────────────────────────────────────
	// PRIMARY KEY
	// ─────────────────────────────────────────────

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// ─────────────────────────────────────────────
	// USER RELATION
	// ─────────────────────────────────────────────

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	// ─────────────────────────────────────────────
	// REWARD DETAILS
	// ─────────────────────────────────────────────

	@Column(name = "points", nullable = false)
	private Long points;

	@Enumerated(EnumType.STRING)
	@Column(name = "transaction_type", nullable = false, length = 20)
	private RewardTransactionType transactionType;

	@Column(name = "description", length = 255)
	private String description;

	@Column(name = "source", length = 100)
	private String source;

	// Optional: store related transaction id if reward came from a transaction
	@Column(name = "reference_transaction_id")
	private Long referenceTransactionId;

	// ─────────────────────────────────────────────
	// AUDIT
	// ─────────────────────────────────────────────

	@CreationTimestamp
	@Column(name = "created_at", updatable = false)
	private LocalDateTime createdAt;

	// ─────────────────────────────────────────────
	// ENUM
	// ─────────────────────────────────────────────

	public enum RewardTransactionType {
		CREDIT, DEBIT

	}

}
