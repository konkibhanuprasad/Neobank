// src/main/java/com/neobank/dto/profile/UpdateProfileRequestDTO.java

package com.neobank.dto.profile;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class UpdateProfileRequestDTO {
    private String fullName;
    private String phone;
    private String dateOfBirth;   // YYYY-MM-DD
    private String gender;        // MALE / FEMALE / OTHER
    private String addressLine;
    private String city;
    private String state;
    private String pincode;
}