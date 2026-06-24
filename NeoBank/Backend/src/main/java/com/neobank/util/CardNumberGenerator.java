// src/main/java/com/neobank/util/CardNumberGenerator.java

package com.neobank.util;

import com.neobank.repository.DebitCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
@RequiredArgsConstructor
public class CardNumberGenerator {

    private final DebitCardRepository cardRepository;
    private static final SecureRandom RNG = new SecureRandom();

    // Luhn-valid 16-digit card number with NeoBank prefix 4111
    public synchronized String generate() {
        String cardNumber;
        int attempts = 0;
        do {
            cardNumber = generateLuhn();
            attempts++;
            if (attempts > 100) throw new RuntimeException("Card number generation failed");
        } while (cardRepository.existsByCardNumber(cardNumber));
        return cardNumber;
    }

    private String generateLuhn() {
        // Prefix: 4111 (NeoBank prefix)
        StringBuilder sb = new StringBuilder("4111");
        for (int i = 0; i < 11; i++) sb.append(RNG.nextInt(10));
        // Compute and append Luhn check digit
        sb.append(luhnCheckDigit(sb.toString()));
        return sb.toString();
    }

    private int luhnCheckDigit(String number) {
        int sum = 0;
        boolean alt = true;
        for (int i = number.length() - 1; i >= 0; i--) {
            int n = Character.getNumericValue(number.charAt(i));
            if (alt) {
                n *= 2;
                if (n > 9) n -= 9;
            }
            sum += n;
            alt = !alt;
        }
        return (10 - (sum % 10)) % 10;
    }

    // Generate 3-digit CVV
    public String generateCvv() {
        return String.format("%03d", RNG.nextInt(1000));
    }
}