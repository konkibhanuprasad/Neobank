//package com.neobank.dto.loan;
//
//import lombok.*;
//
//@Data @NoArgsConstructor @AllArgsConstructor
//public class ApproveLoanRequestDTO {
//    private String interestRate;   // annual % e.g. "10.5"
//}
//
//// RejectLoanRequestDTO.java



// Replace ApproveLoanRequestDTO.java

package com.neobank.dto.loan;
import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class ApproveLoanRequestDTO {
    private String interestRate;   // annual % e.g. "10.5"
    private Long   treasuryId;    // which treasury to disburse from
}