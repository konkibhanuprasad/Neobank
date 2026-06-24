package com.neobank.repository;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.neobank.entity.Account;

public interface AccountAnalyticRepository extends JpaRepository<Account, Long> {

	@Query("""
			SELECT COALESCE(SUM(a.balance), 0)
			FROM Account a
			WHERE a.user.id = :userId
			""")
	BigDecimal getTotalBalanceByUserId(@Param("userId") Long userId);
}
