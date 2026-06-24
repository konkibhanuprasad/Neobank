// DebitCardRepository.java
package com.neobank.repository;

import com.neobank.entity.DebitCard;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DebitCardRepository extends JpaRepository<DebitCard, Long> {

    Optional<DebitCard> findByCardNumber(String cardNumber);

    boolean existsByCardNumber(String cardNumber);

    List<DebitCard> findByUserIdAndStatusNotOrderByCreatedAtDesc(
            Long userId, DebitCard.CardStatus status);

    List<DebitCard> findByAccountIdAndStatusNotOrderByCreatedAtDesc(
            Long accountId, DebitCard.CardStatus status);

    Optional<DebitCard> findByCardNumberAndStatus(
            String cardNumber, DebitCard.CardStatus status);

    // For daily limit check
    @Query("""
        SELECT COALESCE(SUM(ct.amount), 0) FROM CardTransaction ct
        WHERE ct.card.id = :cardId
        AND   ct.status  = 'SUCCESS'
        AND   DATE(ct.createdAt) = CURRENT_DATE
        """)
    java.math.BigDecimal getTodaySpend(@Param("cardId") Long cardId);
    
 // Add to DebitCardRepository.java:

 // All cards for admin management
 Page<DebitCard> findAllByOrderByCreatedAtDesc(Pageable pageable);

 // Filter by request status
 Page<DebitCard> findByRequestStatusOrderByCreatedAtDesc(
         DebitCard.CardRequestStatus requestStatus, Pageable pageable);

 // Filter by card status
 Page<DebitCard> findByStatusOrderByCreatedAtDesc(
         DebitCard.CardStatus status, Pageable pageable);

 // Count pending requests
 long countByRequestStatus(DebitCard.CardRequestStatus status);

 // Find active card by card details (for card-bank transfer)
 @Query("""
     SELECT c FROM DebitCard c
     WHERE c.cardNumber = :cardNumber
     AND   c.status     = 'ACTIVE'
     AND   c.requestStatus = 'APPROVED'
     """)
 Optional<DebitCard> findActiveCardByNumber(
         @Param("cardNumber") String cardNumber);
}