package com.neobank.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminDashboardDTO {

	private long totalUsers;
	private long totalLoans;
	private long totalTransactions;
	private long pendingApprovals;

}
