// src/main/java/com/neobank/controller/AdminStatsController.java
package com.neobank.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.admin.AdminStatsDTO;
import com.neobank.service.AdminStatsService;

import lombok.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AdminStatsController {

    private final AdminStatsService adminStatsService;
    
    
    @GetMapping("/stats")
    public ResponseEntity<ApiResponseDTO<AdminStatsDTO>> getStats() {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Stats fetched", adminStatsService.getStats()));
    }
}