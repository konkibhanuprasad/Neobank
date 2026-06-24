package com.neobank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.neobank.entity.LoanProduct;
import com.neobank.repository.LoanProductRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanAnalyticProductService {
	@Autowired
	private final LoanProductRepository loanProductRepository;

	@Cacheable(value = "loanProducts", key = "'all'")
	public List<LoanProduct> findAll() {
		return loanProductRepository.findAll();
	}

	@CacheEvict(value = "loanProducts", key = "'all'")
	public LoanProduct createLoanProduct(LoanProduct loanProduct) {
		return loanProductRepository.save(loanProduct);
	}

	@CacheEvict(value = "loanProducts", key = "'all'")
	public LoanProduct updateLoanProduct(LoanProduct loanProduct) {
		return loanProductRepository.save(loanProduct);
	}

}
