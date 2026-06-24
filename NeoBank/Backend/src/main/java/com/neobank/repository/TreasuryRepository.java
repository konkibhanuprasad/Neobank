// src/main/java/com/neobank/repository/TreasuryRepository.java

package com.neobank.repository;

import com.neobank.entity.Treasury;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TreasuryRepository extends JpaRepository<Treasury, Long> {

    Optional<Treasury> findByTreasuryCode(String treasuryCode);

    boolean existsByTreasuryCode(String treasuryCode);

    List<Treasury> findByStatusOrderByCreatedAtAsc(
            Treasury.TreasuryStatus status);

    List<Treasury> findAllByOrderByCreatedAtAsc();

    // Find the default/first active treasury
    @Query("""
        SELECT t FROM Treasury t
        WHERE  t.status = 'ACTIVE'
        ORDER BY t.createdAt ASC
        LIMIT 1
        """)
    Optional<Treasury> findFirstActive();

    long countByStatus(Treasury.TreasuryStatus status);
}