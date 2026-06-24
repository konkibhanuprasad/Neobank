package com.neobank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Approvals")
@Getter
@Setter
public class Approval {

	@Id
	private Long id;
	
	@Enumerated(EnumType.STRING)
	private ApprovalStatus status;

	public enum ApprovalStatus {
		Pending, APPROVED, REJECTED
	}
}