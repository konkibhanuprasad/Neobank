// src/main/java/com/neobank/dto/profile/ProfileResponseDTO.java

package com.neobank.dto.profile;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class ProfileResponseDTO {
    private Long   id;
    private String username;
    private String email;
    private String fullName;
    private String phone;
    private String dateOfBirth;
    private String gender;
    private String addressLine;
    private String city;
    private String state;
    private String pincode;
    private String role;
    private String status;
    private String profilePhotoBase64;
    private String profilePhotoType;
    private String createdAt;
    private String updatedAt;
}