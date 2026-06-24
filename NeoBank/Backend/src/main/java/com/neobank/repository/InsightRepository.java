package com.neobank.repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.neobank.dto.Financial.TrendEntryDTO;
import com.neobank.entity.Transaction;
import com.neobank.entity.Transaction.TransactionStatus;

@Repository
public interface InsightRepository extends JpaRepository<Transaction, Long> {

    // Total incoming money: transactions where money came INTO user's accounts
    // Excludes internal transfers (from the same user)
    @Query("""
            SELECT COALESCE(SUM(t.amount), 0)
            FROM Transaction t
            WHERE t.toAccount IS NOT NULL
            AND t.toAccount.user.id = :userId
            AND t.status = :status
            AND (t.fromAccount IS NULL OR t.fromAccount.user.id != :userId)
            """)
    BigDecimal getTotalIncome(
            @Param("userId") Long userId,
            @Param("status") TransactionStatus status);

    // Total outgoing money: transactions where money left user's accounts
    // Excludes internal transfers (to the same user)
    @Query("""
            SELECT COALESCE(SUM(t.amount), 0)
            FROM Transaction t
            WHERE t.fromAccount IS NOT NULL
            AND t.fromAccount.user.id = :userId
            AND t.status = :status
            AND (t.toAccount IS NULL OR t.toAccount.user.id != :userId)
            """)
    BigDecimal getTotalExpense(
            @Param("userId") Long userId,
            @Param("status") TransactionStatus status);

    // Monthly trend: income and expense grouped by year/month
    @Query("""
            SELECT new com.neobank.dto.Financial.TrendEntryDTO(
                YEAR(t.createdAt),
                MONTH(t.createdAt),
                COALESCE(SUM(
                    CASE WHEN t.toAccount IS NOT NULL
                              AND t.toAccount.user.id = :userId
                              AND (t.fromAccount IS NULL OR t.fromAccount.user.id != :userId)
                    THEN t.amount ELSE 0 END), 0),
                COALESCE(SUM(
                    CASE WHEN t.fromAccount IS NOT NULL
                              AND t.fromAccount.user.id = :userId
                              AND (t.toAccount IS NULL OR t.toAccount.user.id != :userId)
                    THEN t.amount ELSE 0 END), 0)
            )
            FROM Transaction t
            WHERE t.status = :status
            AND t.createdAt >= :startDate
            AND (
                (t.toAccount IS NOT NULL AND t.toAccount.user.id = :userId
                    AND (t.fromAccount IS NULL OR t.fromAccount.user.id != :userId))
                OR
                (t.fromAccount IS NOT NULL AND t.fromAccount.user.id = :userId
                    AND (t.toAccount IS NULL OR t.toAccount.user.id != :userId))
            )
            GROUP BY YEAR(t.createdAt), MONTH(t.createdAt)
            ORDER BY YEAR(t.createdAt), MONTH(t.createdAt)
            """)
    List<TrendEntryDTO> getTrendSummary(
            @Param("userId") Long userId,
            @Param("startDate") LocalDateTime startDate,
            @Param("status") TransactionStatus status);

}
