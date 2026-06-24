// src/main/java/com/neobank/controller/ProfileController.java

package com.neobank.controller;

import com.neobank.dto.ApiResponseDTO;
import com.neobank.dto.profile.*;
import com.neobank.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProfileController {

    private final ProfileService profileService;

    // Get my profile
    @GetMapping
    public ResponseEntity<ApiResponseDTO<ProfileResponseDTO>> getProfile(
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Profile fetched",
                profileService.getMyProfile(auth.getName())));
    }

    // Update profile details
    @PutMapping
    public ResponseEntity<ApiResponseDTO<ProfileResponseDTO>> updateProfile(
            @RequestBody UpdateProfileRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Profile updated",
                profileService.updateProfile(req, auth.getName())));
    }

    // Upload profile photo
    @PostMapping(
        value    = "/photo",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<ApiResponseDTO<ProfileResponseDTO>> uploadPhoto(
            @RequestParam("photo") MultipartFile photo,
            Authentication auth) throws Exception {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Photo updated",
                profileService.updateProfilePhoto(photo, auth.getName())));
    }

    // Remove profile photo
    @DeleteMapping("/photo")
    public ResponseEntity<ApiResponseDTO<ProfileResponseDTO>> removePhoto(
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Photo removed",
                profileService.removeProfilePhoto(auth.getName())));
    }

    // Send OTP to new email
    @PostMapping("/email/send-otp")
    public ResponseEntity<ApiResponseDTO<Void>> sendEmailOtp(
            @RequestParam String newEmail,
            Authentication auth) {
        profileService.sendEmailChangeOtp(newEmail, auth.getName());
        return ResponseEntity.ok(ApiResponseDTO.success(
                "OTP sent to new email", null));
    }

    // Verify OTP and update email
    @PutMapping("/email")
    public ResponseEntity<ApiResponseDTO<ProfileResponseDTO>> updateEmail(
            @RequestBody UpdateEmailRequestDTO req,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponseDTO.success(
                "Email updated",
                profileService.updateEmail(req, auth.getName())));
    }
}