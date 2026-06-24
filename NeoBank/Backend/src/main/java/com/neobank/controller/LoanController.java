// src/main/java/com/neobank/controller/LoanController.java

package com.neobank.controller;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.loan.*;
import com.neobank.service.LoanProductService;
import com.neobank.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LoanController {

    private final LoanService loanService;
    private final LoanProductService loanProductService;

    // ── EMI Calculator (public) ──
    @PostMapping("/calculate-emi")
    public ResponseEntity<ApiResponseDTO<EmiCalculatorResponseDTO>> calculateEmi(
            @RequestBody EmiCalculatorRequestDTO req) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "EMI calculated", loanService.calculateEmi(req)));
    }

    // ── Apply for loan ──
    @PostMapping(value = "/apply", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> apply(
            @RequestPart("data")           LoanApplicationRequestDTO req,
            @RequestPart("incomeProof")    MultipartFile incomeProof,
            @RequestPart(value = "addressProof",  required = false) MultipartFile addressProof,
            @RequestPart(value = "propertyDoc",   required = false) MultipartFile propertyDoc,
            @RequestPart(value = "vehicleDoc",    required = false) MultipartFile vehicleDoc,
            @RequestPart(value = "bankStatement", required = false) MultipartFile bankStatement,
            Authentication auth) throws Exception {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.success("Loan application submitted",
                        loanService.applyLoan(req, incomeProof, addressProof,
                                propertyDoc, vehicleDoc, bankStatement, auth.getName())));
    }

    // ── My loans ──
    @GetMapping("/my")
    public ResponseEntity<ApiResponseDTO<List<LoanResponseDTO>>> getMyLoans(
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Loans fetched", loanService.getMyLoans(auth.getName())));
    }

    // ── EMI schedule ──
    @GetMapping("/{loanId}/emi-schedule")
    public ResponseEntity<ApiResponseDTO<List<LoanEmiResponseDTO>>> getEmiSchedule(
            @PathVariable String loanId, Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "EMI schedule fetched",
                loanService.getEmiSchedule(loanId, auth.getName())));
    }

    // ── Foreclosure request ──
    @PostMapping("/{loanId}/foreclosure")
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> requestForeclosure(
            @PathVariable String loanId, Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Foreclosure request submitted",
                loanService.requestForeclosure(loanId, auth.getName())));
    }

    // ── Admin: all loans ──
    @GetMapping("/admin/all")
    public ResponseEntity<ApiResponseDTO<Page<LoanResponseDTO>>> getAllLoans(
            @RequestParam(required = false)            String status,
            @RequestParam(defaultValue = "0")          int page,
            @RequestParam(defaultValue = "15")         int size) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Loans fetched",
                loanService.getAllLoans(status,
                        PageRequest.of(page, size))));
    }

    // ── Admin: loan detail with docs ──
    @GetMapping("/admin/{loanId}")
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> getLoanDetail(
            @PathVariable String loanId) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Loan detail fetched",
                loanService.getLoanDetail(loanId)));
    }

    // ── Admin: approve ──
    @PostMapping("/admin/{loanId}/approve")
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> approve(
            @PathVariable String loanId,
            @RequestBody  ApproveLoanRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Loan approved",
                loanService.approveLoan(loanId, req, auth.getName())));
    }

    // ── Admin: reject ──
    @PostMapping("/admin/{loanId}/reject")
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> reject(
            @PathVariable String loanId,
            @RequestBody  RejectLoanRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Loan rejected",
                loanService.rejectLoan(loanId, req, auth.getName())));
    }

    // ── Admin: approve foreclosure ──
    @PostMapping("/admin/{loanId}/foreclosure/approve")
    public ResponseEntity<ApiResponseDTO<LoanResponseDTO>> approveForeclosure(
            @PathVariable String loanId, Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Foreclosure approved",
                loanService.approveForeclosure(loanId, auth.getName())));
    }
    
 // ── EMI manual pay by customer ──
    @PatchMapping("/{loanId}/repayments/{emiId}/pay")
    public ResponseEntity<ApiResponseDTO<LoanEmiResponseDTO>> manualPay(
            @PathVariable String loanId,
            @PathVariable Long   emiId,
            @RequestBody(required = false)
                ManualEmiPaymentRequestDTO req,
            Authentication auth) {

        ManualEmiPaymentRequestDTO r = req != null
                ? req : new ManualEmiPaymentRequestDTO();

        return ResponseEntity.ok(ApiResponseDTO.success(
                "EMI paid successfully",
                loanService.manualPayEmi(
                        loanId, emiId, r,
                        auth.getName(), false)));
    }

    // ── EMI manual pay by admin ──
    @PatchMapping("/admin/{loanId}/repayments/{emiId}/pay")
    public ResponseEntity<ApiResponseDTO<LoanEmiResponseDTO>> adminManualPay(
            @PathVariable String loanId,
            @PathVariable Long   emiId,
            @RequestBody(required = false)
                ManualEmiPaymentRequestDTO req,
            Authentication auth) {

        ManualEmiPaymentRequestDTO r = req != null
                ? req : new ManualEmiPaymentRequestDTO();

        return ResponseEntity.ok(ApiResponseDTO.success(
                "EMI paid by admin",
                loanService.manualPayEmi(
                        loanId, emiId, r,
                        auth.getName(), true)));
    }

    // ── Admin: get EMI schedule ──
    @GetMapping("/admin/{loanId}/emi-schedule")
    public ResponseEntity<ApiResponseDTO<List<LoanEmiResponseDTO>>> adminGetEmiSchedule(
            @PathVariable String loanId) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "EMI schedule fetched",
                loanService.getEmiScheduleByAdmin(loanId)));
    }
}