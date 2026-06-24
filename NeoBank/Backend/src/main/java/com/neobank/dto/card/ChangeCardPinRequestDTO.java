package com.neobank.dto.card;
import lombok.*;


@Data @NoArgsConstructor @AllArgsConstructor
public class ChangeCardPinRequestDTO {
    private String cardId;
    private String otp;
    private String newPin;
    private String confirmPin;
}

// CardBankTransferRequestDTO.java (new transfer flow)