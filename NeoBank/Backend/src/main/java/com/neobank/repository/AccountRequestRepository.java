// AccountRequestRepository.java
package com.neobank.repository;

import com.neobank.entity.AccountRequest;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRequestRepository extends JpaRepository<AccountRequest, Long> {

    Page<AccountRequest> findAllByOrderByCreatedAtDesc(Pageable pageable);

    Page<AccountRequest> findByStatusOrderByCreatedAtDesc(
            AccountRequest.RequestStatus status, Pageable pageable);

    Optional<AccountRequest> findByRequestId(String requestId);

    @Query("SELECT COUNT(r) > 0 FROM AccountRequest r WHERE r.user.id = :userId AND r.status = 'PENDING'")
    boolean hasPendingRequest(Long userId);

    Page<AccountRequest> findByUserIdOrderByCreatedAtDesc(Long userId, Pageable pageable);

    @Query("SELECT r FROM AccountRequest r WHERE r.user.id = :userId ORDER BY r.createdAt DESC LIMIT 1")
    Optional<AccountRequest> findLatestByUserId(Long userId);

    @Query("SELECT r FROM AccountRequest r WHERE " +
       "(:status IS NULL OR r.status = :status) AND " +
       "(LOWER(r.requestId)       LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(r.user.fullName)   LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(r.user.email)      LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(r.user.username)   LIKE LOWER(CONCAT('%', :search, '%'))) " +
       "ORDER BY r.createdAt DESC")
Page<AccountRequest> searchRequests(@Param("status") AccountRequest.RequestStatus status,
                                     @Param("search") String search,
                                     Pageable pageable);
}