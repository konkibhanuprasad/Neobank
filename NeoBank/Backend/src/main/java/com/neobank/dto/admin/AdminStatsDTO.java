// src/main/java/com/neobank/dto/admin/AdminStatsDTO.java

package com.neobank.dto.admin;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminStatsDTO {
    // Users
    private Long totalUsers;
    private Long activeUsers;
    private Long lockedUsers;

    // Accounts
    private Long totalAccounts;
    private Long activeAccounts;
    private Long frozenAccounts;

    // Applications
    private Long totalApplications;
    private Long pendingApplications;
    private Long approvedApplications;
    private Long rejectedApplications;

    // Transactions
    private Long   totalTransactions;
    private Long   todayTransactions;
    private String totalTransactionVolume;
    private String todayTransactionVolume;

    // Bills
    private Long pendingBills;
    private Long overdueBills;

    // Rewards
    private Long totalRewardPointsIssued;
}