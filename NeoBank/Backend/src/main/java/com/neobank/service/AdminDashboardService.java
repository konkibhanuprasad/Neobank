package com.neobank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neobank.dto.admin.AdminDashboardDTO;
import com.neobank.repository.AdminDashboardRepository;

@Service
@Transactional(readOnly = true)
public class AdminDashboardService {

	@Autowired
	private AdminDashboardRepository repo;

	public AdminDashboardDTO getDahsboard() {
		return new AdminDashboardDTO(repo.getTotalUsers(), 
				repo.getPendingApprovals(), 
				repo.getTotalLoans(),
				repo.getTotalTransactions()

		);

	}

}
