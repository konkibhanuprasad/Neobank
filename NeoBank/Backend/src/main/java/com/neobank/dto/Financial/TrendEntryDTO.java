package com.neobank.dto.Financial;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrendEntryDTO {
	
	private int year;
	private int month;
	private BigDecimal income;
	private BigDecimal expense;

}
