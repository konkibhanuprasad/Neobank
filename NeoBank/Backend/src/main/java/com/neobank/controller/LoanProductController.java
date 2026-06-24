// src/main/java/com/neobank/controller/LoanProductController.java

package com.neobank.controller;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.loan.*;
import com.neobank.service.LoanProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LoanProductController {

    private final LoanProductService productService;

    // ── Public/Customer: active products ──
    @GetMapping("/active")
    public ResponseEntity<ApiResponseDTO
            <List<LoanProductResponseDTO>>> getActive() {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Active products fetched",
                productService.getActiveProducts()));
    }

    // ── Get one product ──
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDTO
            <LoanProductResponseDTO>> getOne(
            @PathVariable Long id) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Product fetched",
                productService.getProduct(id)));
    }

    // ── Admin: all products ──
    @GetMapping
    public ResponseEntity<ApiResponseDTO
            <List<LoanProductResponseDTO>>> getAll() {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Products fetched",
                productService.getAllProducts()));
    }

    // ── Admin: create product ──
    @PostMapping
    public ResponseEntity<ApiResponseDTO
            <LoanProductResponseDTO>> create(
            @RequestBody CreateLoanProductRequestDTO req,
            Authentication auth) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.success(
                        "Product created",
                        productService.createProduct(
                                req, auth.getName())));
    }

    // ── Admin: update product ──
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponseDTO
            <LoanProductResponseDTO>> update(
            @PathVariable Long id,
            @RequestBody UpdateLoanProductRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Product updated",
                productService.updateProduct(
                        id, req, auth.getName())));
    }
}