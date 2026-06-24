package com.neobank.dto.auth;

import java.time.LocalDateTime;
import com.neobank.entity.User.Role;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class LoginResponseDTO {
    private Long userId;
    private String username;
    private String email;
    private String fullName;
    private String accountNumber;
    private Role role;
    private String token;
    private LocalDateTime tokenExpiresAt;   // ← completed field
}