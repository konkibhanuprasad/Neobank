package com.neobank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.neobank.entity.User;

@Repository
public interface AdminDashboardRepository extends JpaRepository<User, Long>{
	
	@Query("SELECT COUNT(u) FROM User u")
	long getTotalUsers();
	
	@Query("SELECT COUNT(l) FROM Loan l")
	long getTotalLoans();
	
	@Query("SELECT COUNT(t) FROM Transaction t")
	long getTotalTransactions();
	
	
	@Query("""
			SELECT COUNT(a)
			FROM Approval a
			WHERE a.status = 'PENDING'
			""")
	long getPendingApprovals();

}
