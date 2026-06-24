// src/main/java/com/neobank/repository/AccountRepository.java

package com.neobank.repository;

import com.neobank.entity.Account;
import com.neobank.entity.Account.AccountStatus;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByAccountNumber(String accountNumber);

    List<Account> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<Account> findByStatus(AccountStatus status);

    boolean existsByAccountNumber(String accountNumber);

    // For account number generation
    @Query("SELECT a.accountNumber FROM Account a WHERE a.accountNumber LIKE :prefix% ORDER BY a.accountNumber DESC LIMIT 1")
    Optional<String> findLastAccountNumberByPrefix(String prefix);

    // Admin — find all accounts by application
    Optional<Account> findByApplicationId(String applicationId);
    
 // Add to AccountRepository.java

    Page<Account> findByStatusOrderByCreatedAtDesc(Account.AccountStatus status, Pageable pageable);
//    List<Account> findByUserIdOrderByCreatedAtDesc(Long userId);

	Optional<Account> findByUserPhoneOrderByCreatedAtDesc(String handle);
	
	// Add to AccountRepository.java

	List<Account> findByAccountTypeAndStatus(
	        Account.AccountType type,
	        Account.AccountStatus status);
	
	long countByStatus(Account.AccountStatus status);


    @Query("SELECT a FROM Account a WHERE " +
       "(:status IS NULL OR a.status = :status) AND " +
       "(LOWER(a.accountNumber) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(a.ifscCode) LIKE LOWER(CONCAT('%', :search, '%')))")
Page<Account> searchAccounts(@Param("status") AccountStatus status,
                              @Param("search") String search,
                              Pageable pageable);
}