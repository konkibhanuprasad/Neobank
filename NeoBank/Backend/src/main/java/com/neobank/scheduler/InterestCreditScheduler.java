// src/main/java/com/neobank/scheduler/InterestCreditScheduler.java

package com.neobank.scheduler;

import com.neobank.entity.Account;
import com.neobank.entity.Transaction;
import com.neobank.repository.AccountRepository;
import com.neobank.repository.TransactionRepository;
import com.neobank.util.TransactionReferenceGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class InterestCreditScheduler {

    private final AccountRepository             accountRepository;
    private final TransactionRepository         transactionRepository;
    private final TransactionReferenceGenerator refGen;

    // Run on 1st of every month at 1:00 AM
    @Scheduled(cron = "0 0 1 1 * *")
    @Transactional
    public void creditMonthlyInterest() {

        log.info("Starting monthly interest credit job");

        // Only SAVINGS accounts with ACTIVE status
        List<Account> accounts = accountRepository
                .findByAccountTypeAndStatus(
                        Account.AccountType.SAVINGS,
                        Account.AccountStatus.ACTIVE);

        int credited = 0;

        for (Account account : accounts) {
            try {
                if (account.getInterestRate() == null ||
                    account.getInterestRate().compareTo(BigDecimal.ZERO) == 0) {
                    continue;
                }
                if (account.getBalance().compareTo(BigDecimal.ZERO) <= 0) {
                    continue;
                }

                // Monthly interest = (balance × annual rate) / 12
                BigDecimal monthlyRate = account.getInterestRate()
                        .divide(BigDecimal.valueOf(100), 10, RoundingMode.HALF_UP)
                        .divide(BigDecimal.valueOf(12),  10, RoundingMode.HALF_UP);

                BigDecimal interest = account.getBalance()
                        .multiply(monthlyRate)
                        .setScale(2, RoundingMode.HALF_UP);

                if (interest.compareTo(BigDecimal.ZERO) <= 0) continue;

                BigDecimal balBefore = account.getBalance();
                account.setBalance(balBefore.add(interest));
                account.recalculateAvailableBalance();
                account.setLastTransactionAt(LocalDateTime.now());
                accountRepository.save(account);

                Transaction txn = Transaction.builder()
                        .referenceNumber(refGen.generate())
                        .toAccount(account)
                        .toAccountNumber(account.getAccountNumber())
                        .amount(interest)
                        .netAmount(interest)
                        .charges(BigDecimal.ZERO)
                        .currency("INR")
                        .transactionType(Transaction.TransactionType.INTEREST_CREDIT)
                        .transactionMode(Transaction.TransactionMode.SYSTEM)
                        .description("Monthly interest credit @ " +
                                account.getInterestRate() + "% p.a.")
                        .toBalanceBefore(balBefore)
                        .toBalanceAfter(account.getBalance())
                        .status(Transaction.TransactionStatus.SUCCESS)
                        .initiatedByUsername("SYSTEM")
                        .initiatedByRole(Transaction.InitiatedByRole.SYSTEM)
                        .processedAt(LocalDateTime.now())
                        .build();

                transactionRepository.save(txn);
                credited++;

                log.info("Interest credited: {} ₹{} → balance: {}",
                        account.getAccountNumber(), interest, account.getBalance());

            } catch (Exception e) {
                log.error("Interest credit failed for account: {}",
                        account.getAccountNumber(), e);
            }
        }

        log.info("Interest credit job complete. Credited: {} accounts", credited);
    }
}