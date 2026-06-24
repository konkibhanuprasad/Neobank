// LoanEmiRepository.java
package com.neobank.repository;

import com.neobank.entity.LoanEmi;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface LoanEmiRepository extends JpaRepository<LoanEmi, Long> {

    List<LoanEmi> findByLoanIdOrderByEmiNumberAsc(Long loanId);

    // Due today or past due with PENDING status
    @Query("""
        SELECT e FROM LoanEmi e
        WHERE e.status   = 'PENDING'
        AND   e.dueDate <= :today
        """)
    List<LoanEmi> findDueAndOverdue(@Param("today") LocalDate today);

    // Upcoming EMIs for auto-debit (due today exactly)
    @Query("""
        SELECT e FROM LoanEmi e
        WHERE e.status  = 'PENDING'
        AND   e.dueDate = :today
        """)
    List<LoanEmi> findDueToday(@Param("today") LocalDate today);

    long countByLoanIdAndStatus(Long loanId, LoanEmi.EmiStatus status);

    @Query("""
        SELECT COUNT(e) FROM LoanEmi e
        WHERE e.loan.user.id = :userId
        AND   e.status       = 'OVERDUE'
        """)
    long countOverdueByUserId(@Param("userId") Long userId);
}