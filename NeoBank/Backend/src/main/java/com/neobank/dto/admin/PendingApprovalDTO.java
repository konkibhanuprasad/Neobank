package com.neobank.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter	
public class PendingApprovalDTO {
	
	private long id;
	private String module;
	private String status;

}
