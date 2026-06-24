// src/main/java/com/neobank/scheduler/EmiDeductionScheduler.java

package com.neobank.scheduler;

import com.neobank.service.LoanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class EmiDeductionScheduler {

	
    private final LoanService loanService;

    // Run every day at 8:00 AM
    @Scheduled(cron = "0 0 8 * * *")
    public void deductEmi() {
        log.info("EMI auto-deduct job started");
        loanService.processEmiDeductions();
        log.info("EMI auto-deduct job complete");
    }
}