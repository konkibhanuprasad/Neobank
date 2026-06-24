package com.neobank.repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.neobank.entity.Transaction;

public interface TransactionAnalyticRepository extends JpaRepository<Transaction, Long> {

    @Query(
            value = """
                    SELECT 
                        DATE(t.created_at) AS txn_date,
                        COALESCE(SUM(CASE 
                            WHEN t.transaction_type IN ('DEPOSIT', 'CREDIT', 'INTEREST_CREDIT', 'LOAN_DISBURSEMENT', 'TREASURY_TOPUP')
                            THEN t.amount ELSE 0 END), 0) AS inflow,
                        COALESCE(SUM(CASE 
                            WHEN t.transaction_type IN ('WITHDRAWAL', 'TRANSFER', 'UPI', 'NEFT', 'RTGS', 'IMPS', 'EMI_DEDUCTION', 'LOAN_FORECLOSURE', 'CARD_TRANSFER')
                            THEN t.amount ELSE 0 END), 0) AS outflow,
                        COUNT(*) AS transaction_count
                    FROM transactions t
                    WHERE t.created_at >= :startDateTime
                    AND t.created_at <= :endDateTime
                    GROUP BY DATE(t.created_at)
                    ORDER BY DATE(t.created_at)
                    """,
            nativeQuery = true
    )
    List<Object[]> findDailyTransactionVolumesRaw(
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );

    @Query(
            value = """
                    SELECT COALESCE(SUM(t.amount), 0)
                    FROM transactions t
                    WHERE t.transaction_type IN ('DEPOSIT', 'CREDIT', 'INTEREST_CREDIT', 'LOAN_DISBURSEMENT', 'TREASURY_TOPUP')
                    AND t.created_at >= :startDateTime
                    AND t.created_at <= :endDateTime
                    """,
            nativeQuery = true
    )
    BigDecimal getTotalInflow(
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );

    @Query(
            value = """
                    SELECT COALESCE(SUM(t.amount), 0)
                    FROM transactions t
                    WHERE t.transaction_type IN ('WITHDRAWAL', 'TRANSFER', 'UPI', 'NEFT', 'RTGS', 'IMPS', 'EMI_DEDUCTION', 'LOAN_FORECLOSURE', 'CARD_TRANSFER')
                    AND t.created_at >= :startDateTime
                    AND t.created_at <= :endDateTime
                    """,
            nativeQuery = true
    )
    BigDecimal getTotalOutflow(
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );

    @Query(
            value = """
                    SELECT COALESCE(AVG(t.amount), 0)
                    FROM transactions t
                    WHERE t.created_at >= :startDateTime
                    AND t.created_at <= :endDateTime
                    """,
            nativeQuery = true
    )
    BigDecimal getAverageTicketSize(
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );
}