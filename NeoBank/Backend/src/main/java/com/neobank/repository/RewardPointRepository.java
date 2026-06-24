package com.neobank.repository;

import com.neobank.entity.RewardPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RewardPointRepository extends JpaRepository<RewardPoint, Long> {

    @Query(
            value = """
                    SELECT 
                        DATE_FORMAT(r.created_at, '%Y-%m') AS month,
                        COALESCE(SUM(r.points), 0) AS points
                    FROM reward_points r
                    WHERE r.user_id = :userId
                    GROUP BY DATE_FORMAT(r.created_at, '%Y-%m')
                    ORDER BY DATE_FORMAT(r.created_at, '%Y-%m')
                    """,
            nativeQuery = true
    )
    List<Object[]> findRewardPointHistoryRaw(
            @Param("userId") Long userId
    );
}