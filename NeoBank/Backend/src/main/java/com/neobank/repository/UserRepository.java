// src/main/java/com/neobank/repository/UserRepository.java

package com.neobank.repository;

import com.neobank.entity.User;
import com.neobank.entity.User.UserStatus;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmailOrUsername(String email, String username);

    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByPhone(String phone);

    Optional<User> findByApplicationId(String applicationId);

    // Check username availability (for real-time check)
    @Query("SELECT COUNT(u) = 0 FROM User u WHERE LOWER(u.username) = LOWER(:username)")
    boolean isUsernameAvailable(String username);
    
 // Add to UserRepository.java
    Page<User> findByStatusOrderByCreatedAtDesc(User.UserStatus status, Pageable pageable);
    
    long countByStatus(User.UserStatus status);
    
 // Add to UserRepository.java

    boolean existsByEmailAndIdNot(String email, Long id);
    boolean existsByPhoneAndIdNot(String phone, Long id);
    Optional<User> findById(Long id);

    @Query("SELECT u FROM User u WHERE " +
       "(:status IS NULL OR u.status = :status) AND " +
       "(LOWER(u.username) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(u.email)    LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " LOWER(u.fullName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
       " u.phone           LIKE CONCAT('%', :search, '%')) " +
       "ORDER BY u.createdAt DESC")
Page<User> searchUsers(@Param("status") User.UserStatus status,
                        @Param("search") String search,
                        Pageable pageable);
}