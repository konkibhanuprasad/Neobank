package com.neobank.repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.neobank.dto.Analytics.LoanPayoffForecast;
import com.neobank.entity.LoanApplication;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

	@EntityGraph(attributePaths = { "user", "loanProduct" })
	List<LoanApplication> findByStatus(String status);

	@Query("""
			SELECT l.status, COUNT(l)
			FROM LoanApplication l
			WHERE DATE(l.createdAt) BETWEEN :startDate AND :endDate
			GROUP BY l.status
			""")
	List<Object[]> countLoansByStatus(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);


	 @Query(
	            value = """
	                    SELECT lp.name, COUNT(*)
	                    FROM loan_applications la
	                    JOIN loan_products lp
	                    ON la.loan_product_id = lp.id
	                    WHERE la.created_at >= :startDateTime
	                    AND la.created_at <= :endDateTime
	                    GROUP BY lp.name
	                    """,
	            nativeQuery = true
	    )

	List<Object[]> countLoansByProduct(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);


@Query(
            value = """
                    SELECT COUNT(*)
                    FROM loan_applications la
                    WHERE la.created_at >= :startDateTime
                    AND la.created_at <= :endDateTime
                    """,
            nativeQuery = true
    )

	Long countLoansInRange(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

	@Query("""
			SELECT COUNT(l)
			FROM LoanApplication l
			WHERE l.repaymentStatus = 'OVERDUE'
			AND DATE(l.createdAt) BETWEEN :startDate AND :endDate
			""")
	Long countOverdueLoans(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

	@Query("""
			SELECT COALESCE(SUM(l.outstandingPrincipal), 0)
			FROM LoanApplication l
			WHERE l.user.id = :userId
			AND l.status = 'APPROVED'
			""")
	BigDecimal getOutstandingPrincipalByUserId(@Param("userId") Long userId);

	@Query("""
			SELECT new com.neobank.dto.Analytics.LoanPayoffForecast(
			    l.id,
			    l.outstandingPrincipal,
			    l.monthsRemaining,
			    l.projectedPayoffDate
			)
			FROM LoanApplication l
			WHERE l.user.id = :userId
			AND l.status = 'APPROVED'
			""")
	List<Object[]> findLoanPayoffForecasts(@Param("userId") Long userId);

}
