package com.neobank.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "loan_applications")
@NoArgsConstructor
@AllArgsConstructor

@Getter
@Setter

public class LoanApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(name = "name")
	private String name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "loan_product_id", nullable = false)
	private LoanProduct loanProduct;

	@Column(name = "requested_amount", nullable = false, precision = 15, scale = 2)
	private BigDecimal requestedAmount;

	@Column(name = "approved_amount", precision = 15, scale = 2)
	private BigDecimal approvedAmount;

	@Column(name = "interest_rate", precision = 5, scale = 2)
	private BigDecimal interestRate;

	@Column(name = "tenure_months")
	private Integer tenureMonths;

	@Column(name = "monthly_emi", precision = 15, scale = 2)
	private BigDecimal monthlyEmi;

	@Column(name = "outstanding_principal", precision = 15, scale = 2)
	private BigDecimal outstandingPrincipal;

	@Column(name = "months_remaining")
	private Integer monthsRemaining;

	@Column(name = "projected_payoff_date")
	private LocalDate projectedPayoffDate;

	/*
	 * PENDING, APPROVED, REJECTED
	 */
	@Column(name = "status", nullable = false, length = 30)
	private String status;

	/*
	 * ACTIVE, PAID, OVERDUE Used for NPA calculation in Sprint 5
	 */
	@Column(name = "repayment_status", length = 30)
	private String repaymentStatus;

	@Column(name = "purpose", length = 255)
	private String purpose;

	@Column(name = "rejection_reason", length = 500)
	private String rejectionReason;

	@Column(name = "applied_at", nullable = false)
	private LocalDateTime appliedAt;

	/*
	 * Repository query used createdAt, so we keep this field also.
	 */
	@Column(name = "created_at", nullable = false)
	private LocalDateTime createdAt;

	@Column(name = "updated_at")
	private LocalDateTime updatedAt;

	@PrePersist
	public void prePersist() {
		LocalDateTime now = LocalDateTime.now();

		if (this.appliedAt == null) {
			this.appliedAt = now;
		}

		if (this.createdAt == null) {
			this.createdAt = now;
		}

		if (this.status == null) {
			this.status = "PENDING";
		}

		if (this.repaymentStatus == null) {
			this.repaymentStatus = "ACTIVE";
		}

		if (this.outstandingPrincipal == null) {
			this.outstandingPrincipal = BigDecimal.ZERO;
		}
	}

	@PreUpdate
	public void preUpdate() {
		this.updatedAt = LocalDateTime.now();
	}

}
