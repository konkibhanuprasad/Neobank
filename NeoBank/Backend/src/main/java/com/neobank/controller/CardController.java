// src/main/java/com/neobank/controller/CardController.java

package com.neobank.controller;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.card.*;
import com.neobank.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//src/main/java/com/neobank/controller/CardController.java

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CardController {

 private final CardService cardService;

 // ── Customer endpoints ──

 @PostMapping("/request")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> requestCard(
         @RequestBody RequestCardDTO req, Authentication auth) {
     return ResponseEntity.status(HttpStatus.CREATED)
             .body(ApiResponseDTO.success("Card request submitted",
                     cardService.requestCard(req, auth.getName())));
 }

 @GetMapping("/my")
 public ResponseEntity<ApiResponseDTO<List<CardResponseDTO>>> getMyCards(
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Cards fetched", cardService.getMyCards(auth.getName())));
 }

 @PostMapping("/{cardId}/details/send-otp")
 public ResponseEntity<ApiResponseDTO<Void>> sendRevealOtp(
         @PathVariable Long cardId, Authentication auth) {
     cardService.sendRevealOtp(cardId, auth.getName());
     return ResponseEntity.ok(ApiResponseDTO.success(
             "OTP sent to registered email", null));
 }

 @PostMapping("/details/reveal")
 public ResponseEntity<ApiResponseDTO<RevealCardDetailsResponseDTO>> revealDetails(
         @RequestBody RevealCardDetailsRequestDTO req,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card details sent to email",
             cardService.revealCardDetails(req, auth.getName())));
 }

 @PostMapping("/{cardId}/pin/send-otp")
 public ResponseEntity<ApiResponseDTO<Void>> sendPinOtp(
         @PathVariable Long cardId, Authentication auth) {
     cardService.sendPinChangeOtp(cardId, auth.getName());
     return ResponseEntity.ok(ApiResponseDTO.success(
             "OTP sent", null));
 }

 @PostMapping("/pin/change")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> changePin(
         @RequestBody ChangeCardPinRequestDTO req,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "PIN changed",
             cardService.changeCardPin(req, auth.getName())));
 }

 @PostMapping("/{cardId}/block")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> block(
         @PathVariable Long cardId,
         @RequestParam(required = false) String reason,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card blocked",
             cardService.blockCard(cardId, reason, auth.getName())));
 }

 @PostMapping("/{cardId}/unblock")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> unblock(
         @PathVariable Long cardId, Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card unblocked",
             cardService.unblockCard(cardId, auth.getName())));
 }

 @PutMapping("/{cardId}/limits")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> updateLimits(
         @PathVariable Long cardId,
         @RequestBody  UpdateLimitsRequestDTO req,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Limits updated",
             cardService.updateLimits(cardId, req, auth.getName())));
 }

 @PostMapping("/replacement")
 public ResponseEntity<ApiResponseDTO<CardResponseDTO>> requestReplacement(
         @RequestBody ReplacementRequestDTO req, Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Replacement requested",
             cardService.requestReplacement(req, auth.getName())));
 }

 @GetMapping("/{cardId}/transactions")
 public ResponseEntity<ApiResponseDTO<Page<CardTransactionResponseDTO>>> getTransactions(
         @PathVariable Long cardId,
         @RequestParam(defaultValue = "0")  int page,
         @RequestParam(defaultValue = "15") int size,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Transactions fetched",
             cardService.getCardTransactions(cardId, auth.getName(),
                     PageRequest.of(page, size))));
 }

 @PostMapping("/transfer/send-otp")
 public ResponseEntity<ApiResponseDTO<Void>> sendTransferOtp(
         @RequestParam String cardNumber, Authentication auth) {
     cardService.sendCardTransferOtp(cardNumber, auth.getName());
     return ResponseEntity.ok(ApiResponseDTO.success("OTP sent", null));
 }

 @PostMapping("/transfer")
 public ResponseEntity<ApiResponseDTO<CardTransactionResponseDTO>> transfer(
         @RequestBody CardBankTransferRequestDTO req,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Transfer successful",
             cardService.cardBankTransfer(req, auth.getName())));
 }

 // ── Admin endpoints ──

 @GetMapping("/admin/all")
 public ResponseEntity<ApiResponseDTO<Page<AdminCardResponseDTO>>> getAllCards(
         @RequestParam(required = false, defaultValue = "") String filter,
         @RequestParam(defaultValue = "0")  int page,
         @RequestParam(defaultValue = "15") int size) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Cards fetched",
             cardService.getAllCards(filter,
                     PageRequest.of(page, size))));
 }

 @PostMapping("/admin/{cardId}/approve")
 public ResponseEntity<ApiResponseDTO<AdminCardResponseDTO>> approve(
         @PathVariable Long cardId, Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card approved",
             cardService.approveCard(cardId, auth.getName())));
 }

 @PostMapping("/admin/{cardId}/reject")
 public ResponseEntity<ApiResponseDTO<AdminCardResponseDTO>> reject(
         @PathVariable Long cardId,
         @RequestBody  AdminCardActionDTO req,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card rejected",
             cardService.rejectCard(cardId, req, auth.getName())));
 }

 @PostMapping("/admin/{cardId}/block")
 public ResponseEntity<ApiResponseDTO<AdminCardResponseDTO>> adminBlock(
         @PathVariable Long cardId,
         @RequestParam(required = false) String reason,
         Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card blocked",
             cardService.adminBlockCard(cardId, reason, auth.getName())));
 }

 @PostMapping("/admin/{cardId}/unblock")
 public ResponseEntity<ApiResponseDTO<AdminCardResponseDTO>> adminUnblock(
         @PathVariable Long cardId, Authentication auth) {
     return ResponseEntity.ok(ApiResponseDTO.success(
             "Card unblocked",
             cardService.adminUnblockCard(cardId, auth.getName())));
 }
}