// src/main/java/com/neobank/dto/profile/UpdateEmailRequestDTO.java

package com.neobank.dto.profile;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class UpdateEmailRequestDTO {
    private String newEmail;
    private String otp;       // verify OTP before changing
}