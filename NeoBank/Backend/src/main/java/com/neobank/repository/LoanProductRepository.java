// src/main/java/com/neobank/repository/LoanProductRepository.java

package com.neobank.repository;

import com.neobank.entity.LoanProduct;
import com.neobank.entity.Loan;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanProductRepository
        extends JpaRepository<LoanProduct, Long> {

    List<LoanProduct> findByIsActiveTrueOrderByLoanTypeAsc();

    List<LoanProduct> findAllByOrderByCreatedAtDesc();

    Optional<LoanProduct> findByProductNameIgnoreCase(String productName);

    boolean existsByProductNameIgnoreCase(String productName);

    List<LoanProduct> findByLoanTypeAndIsActiveTrue(Loan.LoanType loanType);
}