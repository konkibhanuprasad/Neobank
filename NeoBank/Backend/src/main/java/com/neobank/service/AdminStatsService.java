// src/main/java/com/neobank/service/AdminStatsService.java

package com.neobank.service;

import com.neobank.dto.admin.AdminStatsDTO;
import com.neobank.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neobank.entity.*;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class AdminStatsService {

    private final UserRepository        userRepository;
    private final AccountRepository     accountRepository;
    private final ApplicationRepository applicationRepository;
    private final TransactionRepository transactionRepository;
    private final BillRepository        billRepository;

    @Transactional(readOnly = true)
    public AdminStatsDTO getStats() {
        return AdminStatsDTO.builder()
                // Users
                .totalUsers(userRepository.count())
                .activeUsers(userRepository
                        .countByStatus(User.UserStatus.ACTIVE))
                .lockedUsers(userRepository
                        .countByStatus(User.UserStatus.LOCKED))
                // Accounts
                .totalAccounts(accountRepository.count())
                .activeAccounts(accountRepository
                        .countByStatus(Account.AccountStatus.ACTIVE))
                .frozenAccounts(accountRepository
                        .countByStatus(Account.AccountStatus.FROZEN))
                // Applications
                .totalApplications(applicationRepository.count())
                .pendingApplications(applicationRepository
                        .countByStatus(Application.ApplicationStatus.SUBMITTED))
                .approvedApplications(applicationRepository
                        .countByStatus(Application.ApplicationStatus.APPROVED))
                .rejectedApplications(applicationRepository
                        .countByStatus(Application.ApplicationStatus.REJECTED))
                // Transactions
                .totalTransactions(transactionRepository.count())
                .todayTransactions(transactionRepository
                        .countByCreatedAtDate(LocalDate.now()))
                .totalTransactionVolume(transactionRepository
                        .getTotalVolume().toPlainString())
                .todayTransactionVolume(transactionRepository
                        .getTodayVolume(LocalDate.now()).toPlainString())
                // Bills
                .pendingBills(billRepository
                        .countByStatus(Bill.BillStatus.PENDING))
                .overdueBills(billRepository
                        .countByStatus(Bill.BillStatus.OVERDUE))
                .build();
    }
}