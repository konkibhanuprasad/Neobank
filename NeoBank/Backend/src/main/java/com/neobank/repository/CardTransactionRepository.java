// CardTransactionRepository.java
package com.neobank.repository;

import com.neobank.entity.CardTransaction;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CardTransactionRepository
        extends JpaRepository<CardTransaction, Long> {

    Page<CardTransaction> findByCardIdOrderByCreatedAtDesc(
            Long cardId, Pageable pageable);

    Page<CardTransaction> findByAccountIdOrderByCreatedAtDesc(
            Long accountId, Pageable pageable);
}