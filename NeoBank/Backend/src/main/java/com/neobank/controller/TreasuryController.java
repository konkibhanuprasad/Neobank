// src/main/java/com/neobank/controller/TreasuryController.java

package com.neobank.controller;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.treasury.*;
import com.neobank.service.TreasuryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treasury")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TreasuryController {

    private final TreasuryService treasuryService;

    // All treasuries (admin)
    @GetMapping
    public ResponseEntity<ApiResponseDTO<List<TreasuryResponseDTO>>> getAll() {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Treasuries fetched",
                treasuryService.getAllTreasuries()));
    }

    // Active treasuries only (for loan approval dropdown)
    @GetMapping("/active")
    public ResponseEntity<ApiResponseDTO<List<TreasuryResponseDTO>>> getActive() {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Active treasuries fetched",
                treasuryService.getActiveTreasuries()));
    }

    // Get one
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDTO<TreasuryResponseDTO>> getOne(
            @PathVariable Long id) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Treasury fetched",
                treasuryService.getTreasury(id)));
    }

    // Create treasury
    @PostMapping
    public ResponseEntity<ApiResponseDTO<TreasuryResponseDTO>> create(
            @RequestBody CreateTreasuryRequestDTO req,
            Authentication auth) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.success(
                        "Treasury created",
                        treasuryService.createTreasury(req, auth.getName())));
    }

    // Top up treasury
    @PostMapping("/{id}/topup")
    public ResponseEntity<ApiResponseDTO<TreasuryResponseDTO>> topUp(
            @PathVariable Long id,
            @RequestBody  TopUpTreasuryRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Treasury topped up",
                treasuryService.topUp(id, req, auth.getName())));
    }

    // Update status
    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponseDTO<TreasuryResponseDTO>> updateStatus(
            @PathVariable Long id,
            @RequestParam  String status,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Status updated",
                treasuryService.updateStatus(id, status, auth.getName())));
    }
}