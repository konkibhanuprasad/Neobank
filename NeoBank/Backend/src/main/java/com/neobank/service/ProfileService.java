// src/main/java/com/neobank/service/ProfileService.java

package com.neobank.service;

import com.neobank.dto.profile.*;
import com.neobank.entity.*;
import com.neobank.entity.OtpVerification.OtpPurpose;
import com.neobank.entity.User.Gender;
import com.neobank.exception.NeoBankException;
import com.neobank.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProfileService {

    private final UserRepository userRepository;
    private final OtpService     otpService;
    private final MailService    mailService;

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd MMM yyyy");
    private static final DateTimeFormatter FMT_FULL =
            DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");
    private static final long MAX_PHOTO_SIZE = 2 * 1024 * 1024; // 2MB

    // ─────────────────────────────────────────────
    //  GET MY PROFILE
    // ─────────────────────────────────────────────

    @Transactional(readOnly = true)
    public ProfileResponseDTO getMyProfile(String username) {
        User user = findUser(username);
        return buildResponse(user);
    }

    // ─────────────────────────────────────────────
    //  UPDATE PROFILE DETAILS
    // ─────────────────────────────────────────────

    @Transactional
    public ProfileResponseDTO updateProfile(
            UpdateProfileRequestDTO req, String username) {

        User user = findUser(username);

        // Full Name
        if (req.getFullName() != null && !req.getFullName().isBlank()) {
            user.setFullName(req.getFullName().trim());
        }

        // Phone — check uniqueness
        if (req.getPhone() != null && !req.getPhone().isBlank()) {
            String phone = req.getPhone().trim();
            if (!phone.matches("^[6-9]\\d{9}$")) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_PHONE",
                        "Enter valid 10-digit Indian mobile number.");
            }
            if (userRepository.existsByPhoneAndIdNot(phone, user.getId())) {
                throw new NeoBankException(HttpStatus.CONFLICT,
                        "PHONE_EXISTS",
                        "This mobile number is already registered.");
            }
            user.setPhone(phone);
        }

        // Date of Birth
        if (req.getDateOfBirth() != null && !req.getDateOfBirth().isBlank()) {
            try {
                LocalDate dob = LocalDate.parse(req.getDateOfBirth());
                // Must be at least 18 years old
                if (dob.isAfter(LocalDate.now().minusYears(18))) {
                    throw new NeoBankException(HttpStatus.BAD_REQUEST,
                            "INVALID_DOB",
                            "Must be at least 18 years old.");
                }
                user.setDateOfBirth(dob);
            } catch (NeoBankException e) {
                throw e;
            } catch (Exception e) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_DATE",
                        "Date format must be YYYY-MM-DD.");
            }
        }

        // Gender
        if (req.getGender() != null && !req.getGender().isBlank()) {
            try {
                Gender gender = Gender.valueOf(req.getGender().toUpperCase());
                user.setGender(gender);
            } catch (IllegalArgumentException ex) {
                throw new NeoBankException(
                    HttpStatus.BAD_REQUEST,
                    "INVALID_GENDER",
                    "Gender must be MALE, FEMALE, or OTHER."
                );
            }
        }

        // Address fields
        if (req.getAddressLine() != null) user.setCurrentAddressLine(username);
        if (req.getCity()        != null) user.setCurrentCity(req.getCity().trim());
        if (req.getState()       != null) user.setCurrentState(req.getState().trim());

        if (req.getPincode() != null && !req.getPincode().isBlank()) {
            if (!req.getPincode().matches("^\\d{6}$")) {
                throw new NeoBankException(HttpStatus.BAD_REQUEST,
                        "INVALID_PINCODE", "Pincode must be 6 digits.");
            }
            user.setCurrentPincode(req.getPincode());
        }

        user.setUpdatedBy(username);
        userRepository.save(user);

        log.info("Profile updated: {}", username);
        return buildResponse(user);
    }

    // ─────────────────────────────────────────────
    //  UPDATE PROFILE PHOTO
    // ─────────────────────────────────────────────

    @Transactional
    public ProfileResponseDTO updateProfilePhoto(
            MultipartFile photo, String username) throws Exception {

        if (photo == null || photo.isEmpty()) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "NO_FILE", "No photo provided.");
        }

        // Validate type
        String contentType = photo.getContentType();
        if (contentType == null ||
            (!contentType.equals("image/jpeg") &&
             !contentType.equals("image/png"))) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_FILE_TYPE",
                    "Only JPG and PNG images are allowed.");
        }

        // Validate size (max 2MB)
        if (photo.getSize() > MAX_PHOTO_SIZE) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "FILE_TOO_LARGE",
                    "Photo must be under 2MB.");
        }

        User user = findUser(username);
        user.setProfilePhoto(photo.getBytes());
        user.setProfilePhotoType(contentType);
        user.setUpdatedBy(username);
        userRepository.save(user);

        log.info("Profile photo updated: {}", username);
        return buildResponse(user);
    }

    // ─────────────────────────────────────────────
    //  REMOVE PROFILE PHOTO
    // ─────────────────────────────────────────────

    @Transactional
    public ProfileResponseDTO removeProfilePhoto(String username) {
        User user = findUser(username);
        user.setProfilePhoto(null);
        user.setProfilePhotoType(null);
        user.setUpdatedBy(username);
        userRepository.save(user);
        return buildResponse(user);
    }

    // ─────────────────────────────────────────────
    //  SEND EMAIL CHANGE OTP
    // ─────────────────────────────────────────────

    public void sendEmailChangeOtp(String newEmail, String username) {
        User user = findUser(username);

        // Validate new email format
        if (!newEmail.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_EMAIL", "Invalid email format.");
        }

        // Check if email already taken
        if (userRepository.existsByEmailAndIdNot(newEmail, user.getId())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "EMAIL_EXISTS",
                    "This email is already registered to another account.");
        }

        // Send OTP to the NEW email
        otpService.sendOtp(
                newEmail,
                OtpPurpose.EMAIL_CHANGE,
                "NeoBank — Email Change OTP",
                """
                You requested to change your NeoBank registered email to this address.

                OTP: {OTP}

                Valid for 10 minutes.
                If you did not request this, ignore this email.

                NeoBank Team
                """
        );
    }

    // ─────────────────────────────────────────────
    //  VERIFY OTP AND CHANGE EMAIL
    // ─────────────────────────────────────────────

    @Transactional
    public ProfileResponseDTO updateEmail(
            UpdateEmailRequestDTO req, String username) {

        User user = findUser(username);

        String newEmail = req.getNewEmail().trim().toLowerCase();

        // Validate format
        if (!newEmail.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
            throw new NeoBankException(HttpStatus.BAD_REQUEST,
                    "INVALID_EMAIL", "Invalid email format.");
        }

        // Check uniqueness again at update time
        if (userRepository.existsByEmailAndIdNot(newEmail, user.getId())) {
            throw new NeoBankException(HttpStatus.CONFLICT,
                    "EMAIL_EXISTS",
                    "This email is already registered.");
        }

        // Verify OTP sent to new email
        otpService.verifyOtp(newEmail, OtpPurpose.EMAIL_CHANGE, req.getOtp());

        String oldEmail = user.getEmail();
        user.setEmail(newEmail);
        user.setUpdatedBy(username);
        userRepository.save(user);

        // Notify old email
        try {
            mailService.sendMail(oldEmail,
                "NeoBank — Email Address Changed",
                """
                Dear %s,

                Your NeoBank account email has been changed to: %s

                If you did not make this change, contact support immediately.

                NeoBank Team
                """.formatted(
                    user.getFullName() != null ? user.getFullName() : user.getUsername(),
                    newEmail
                )
            );
        } catch (Exception e) {
            log.warn("Email change notification failed for {}", username);
        }

        log.info("Email changed: {} → {}", oldEmail, newEmail);
        return buildResponse(user);
    }

    // ─────────────────────────────────────────────
    //  PRIVATE
    // ─────────────────────────────────────────────

    private User findUser(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new NeoBankException(
                        HttpStatus.NOT_FOUND, "USER_NOT_FOUND",
                        "User not found."));
    }

    public ProfileResponseDTO buildResponse(User u) {
        String photoBase64 = null;
        if (u.getProfilePhoto() != null && u.getProfilePhoto().length > 0) {
            photoBase64 = Base64.getEncoder()
                    .encodeToString(u.getProfilePhoto());
        }

        return ProfileResponseDTO.builder()
                .id(u.getId())
                .username(u.getUsername())
                .email(u.getEmail())
                .fullName(u.getFullName())
                .phone(u.getPhone())
                .dateOfBirth(u.getDateOfBirth() != null
                        ? u.getDateOfBirth().format(FMT) : null)
                .gender(u.getGender() != null ? u.getGender().name() : null)
                .addressLine(u.getCurrentAddressLine())
                .city(u.getCurrentCity())
                .state(u.getCurrentState())
                .pincode(u.getCurrentPincode())
                .role(u.getRole().name())
                .status(u.getStatus().name())
                .profilePhotoBase64(photoBase64)
                .profilePhotoType(u.getProfilePhotoType())
                .createdAt(u.getCreatedAt() != null
                        ? u.getCreatedAt().format(FMT_FULL) : null)
                .updatedAt(u.getUpdatedAt() != null
                        ? u.getUpdatedAt().format(FMT_FULL) : null)
                .build();
    }
}