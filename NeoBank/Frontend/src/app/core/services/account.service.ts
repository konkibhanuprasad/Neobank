// src/app/core/services/account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from './auth.service';

export interface AccountResponse {
  id:                number;
  accountNumber:     string;
  accountType:       string;
  balance:           string;
  availableBalance:  string;
  minimumBalance:    string;
  currency:          string;
  branchName:        string;
  ifscCode:          string;
  interestRate:      string;
  status:            string;
  openedOn:          string;
  nomineeName:       string;
  nomineeRelation:   string;
  lastTransactionAt: string;
  netBankingEnabled: boolean;
  upiEnabled:        boolean;
  debitCardEnabled:  boolean;
}

@Injectable({ providedIn: 'root' })
export class AccountService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }

  // ─────────────────────────────────────────────
  //  CUSTOMER
  // ─────────────────────────────────────────────

  getMyAccounts(): Observable<ApiResponse<AccountResponse[]>> {
    return this.http.get<ApiResponse<AccountResponse[]>>(
      `${this.base}/account/my`,
      { headers: this.authHeaders }
    );
  }

  // ─────────────────────────────────────────────
  //  ACCOUNT REQUESTS
  // ─────────────────────────────────────────────

  submitAccountRequest(payload: { accountType: string; reason: string }): Observable<any> {
    return this.http.post(
      `${this.base}/account-request/submit`,
      payload,
      { headers: this.authHeaders }
    );
  }

  getMyAccountRequests(page = 0, size = 10): Observable<any> {
    return this.http.get(
      `${this.base}/account-request/my`,
      { params: { page, size }, headers: this.authHeaders }
    );
  }

  // ─────────────────────────────────────────────
  //  ADMIN
  // ─────────────────────────────────────────────

  // getAllAccounts(status?: string, page = 0, size = 10): Observable<any> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get(
  //     `${this.base}/account/admin/all`,
  //     { params, headers: this.authHeaders }
  //   );
  // }

  getAllAccounts(status?: string, page = 0, size = 10, search?: string): Observable<any> {
  let params: any = { page, size };
  if (status)  params['status'] = status;
  if (search)  params['search'] = search;   // ← add this
  return this.http.get(
    `${this.base}/account/admin/all`,
    { params, headers: this.authHeaders }
  );
}

  updateAccountStatus(payload: {
    accountNumber: string;
    status:        string;
    reason:        string;
  }): Observable<any> {
    return this.http.put(
      `${this.base}/account/admin/status`,
      payload,
      { headers: this.authHeaders }
    );
  }

  // getAllAccountRequests(status?: string, page = 0, size = 10): Observable<any> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get(
  //     `${this.base}/account-request/admin/all`,
  //     { params, headers: this.authHeaders }
  //   );
  // }

  getAllAccountRequests(status?: string, page = 0, size = 10, search?: string): Observable<any> {
  let params: any = { page, size };
  if (status) params['status'] = status;
  if (search) params['search'] = search;  // ← add this
  return this.http.get(
    `${this.base}/account-request/admin/all`,
    { params, headers: this.authHeaders }
  );
}

  getAccountRequestDetail(requestId: string): Observable<any> {
    return this.http.get(
      `${this.base}/account-request/admin/${requestId}`,
      { headers: this.authHeaders }
    );
  }

  approveAccountRequest(payload: any): Observable<any> {
    return this.http.post(
      `${this.base}/account-request/admin/approve`,
      payload,
      { headers: this.authHeaders }
    );
  }

  rejectAccountRequest(payload: any): Observable<any> {
    return this.http.post(
      `${this.base}/account-request/admin/reject`,
      payload,
      { headers: this.authHeaders }
    );
  }
}