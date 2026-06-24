
// src/app/core/services/transaction.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }

  // ─────────────────────────────────────────────
  //  CUSTOMER
  // ─────────────────────────────────────────────

  // getMyTransactions(accountNumber: string, page = 0, size = 10): Observable<any> {
  //   return this.http.get(
  //     `${this.base}/transaction/my/${accountNumber}`,
  //     { params: { page, size }, headers: this.authHeaders }
  //   );
  // }

  getMyTransactions(
  accountNumber: string,
  page = 0,
  size = 10,
  type?: string,
  status?: string
): Observable<any> {
  let params: any = { page, size };
  if (type)   params['type']   = type;
  if (status) params['status'] = status;
  return this.http.get(
    `${this.base}/transaction/my/${accountNumber}`,
    { params
      // , headers: this.authHeaders 
    }
  );
}

  upiTransfer(payload: {
    fromAccountNumber: string;
    upiId:             string;
    amount:            string;
    description?:      string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/transaction/upi`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  neftTransfer(payload: {
    fromAccountNumber:        string;
    beneficiaryAccountNumber: string;
    beneficiaryName:          string;
    beneficiaryIfsc:          string;
    beneficiaryBankName?:     string;
    amount:                   string;
    description?:             string;
    mode?:                    string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/transaction/neft`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  selfTransfer(payload: {
    fromAccountNumber: string;
    toAccountNumber:   string;
    amount:            string;
    description?:      string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/transaction/self`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  // ─────────────────────────────────────────────
  //  ADMIN
  // ─────────────────────────────────────────────

  adminDeposit(payload: {
    accountNumber: string;
    amount:        string;
    description:   string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/transaction/admin/deposit`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  adminWithdraw(payload: {
    accountNumber: string;
    amount:        string;
    description:   string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/transaction/admin/withdraw`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  // getAllAdminTransactions(page = 0, size = 10): Observable<any> {
  //   return this.http.get(
  //     `${this.base}/transaction/admin/all`,
  //     { params: { page, size }, headers: this.authHeaders }
  //   );
  // }

  getAllAdminTransactions(page = 0, size = 10, search?: string): Observable<any> {
  let params: any = { page, size };
  if (search) params['search'] = search;
  return this.http.get(
    `${this.base}/transaction/admin/all`,
    { params
      // , headers: this.authHeaders 
    }
  );
}

}