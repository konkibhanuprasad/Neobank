// RequestCardDTO.java
package com.neobank.dto.card;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class RequestCardDTO {
    private String accountNumber;
    private String network;       // RUPAY / VISA / MASTERCARD
    private String requestReason; // why customer wants card
}

// AdminCardActionDTO.java