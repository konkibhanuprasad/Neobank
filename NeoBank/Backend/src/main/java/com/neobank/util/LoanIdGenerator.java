// src/main/java/com/neobank/util/LoanIdGenerator.java

package com.neobank.util;

import com.neobank.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.Year;

@Component
@RequiredArgsConstructor
public class LoanIdGenerator {

    private final LoanRepository loanRepository;
    private static final String PREFIX = "LN";

    public synchronized String generate() {
        int year = Year.now().getValue();
        long count = loanRepository.count() + 1;
        return PREFIX + year + String.format("%07d", count);
    }
}