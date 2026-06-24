// LoanRepository.java
package com.neobank.repository;

import com.neobank.entity.Loan;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    Optional<Loan> findByLoanId(String loanId);

    List<Loan> findByUserIdOrderByCreatedAtDesc(Long userId);

    Page<Loan> findAllByOrderByCreatedAtDesc(Pageable pageable);

    Page<Loan> findByStatusOrderByCreatedAtDesc(
            Loan.LoanStatus status, Pageable pageable);

    @Query("""
        SELECT COUNT(l) FROM Loan l WHERE l.status = :status
        """)
    long countByStatus(@Param("status") Loan.LoanStatus status);

    @Query("""
        SELECT l FROM Loan l
        WHERE l.user.id = :userId
        AND   l.status IN ('APPROVED','OVERDUE')
        ORDER BY l.createdAt DESC
        """)
    List<Loan> findActiveByUserId(@Param("userId") Long userId);

    boolean existsByUserIdAndStatusIn(
            Long userId, List<Loan.LoanStatus> statuses);
}