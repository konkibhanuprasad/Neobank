// src/main/java/com/neobank/scheduler/BillOverdueScheduler.java

package com.neobank.scheduler;

import com.neobank.entity.Bill;
import com.neobank.repository.BillRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class BillOverdueScheduler {

    private final BillRepository billRepository;

    // Run every day at midnight
    @Scheduled(cron = "0 0 0 * * *")
    @Transactional
    public void markOverdueBills() {
        List<Bill> overdue = billRepository
                .findOverdue(null, LocalDate.now());

        if (overdue.isEmpty()) return;

        overdue.forEach(bill -> {
            bill.setStatus(Bill.BillStatus.OVERDUE);
            billRepository.save(bill);
        });

        log.info("Marked {} bills as OVERDUE", overdue.size());
    }
}