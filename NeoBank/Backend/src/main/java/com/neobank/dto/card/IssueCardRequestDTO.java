package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class IssueCardRequestDTO {
    private String accountNumber;
    private String network;  // RUPAY / VISA / MASTERCARD
}

// BlockCardRequestDTO.java