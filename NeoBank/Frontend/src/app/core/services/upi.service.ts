// src/app/core/services/upi.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UpiService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }

  // ─────────────────────────────────────────────
  //  UPI ID MANAGEMENT
  // ─────────────────────────────────────────────

  createUpiId(payload: {
    accountNumber: string;
    vpaPrefix:     string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/upi/create`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  getAllMyUpiIds(): Observable<any> {
    return this.http.get(
      `${this.base}/upi/my`,
      // { headers: this.authHeaders }
    );
  }

  getUpiIdsByAccount(accountNumber: string): Observable<any> {
    return this.http.get(
      `${this.base}/upi/account/${accountNumber}`,
      // { headers: this.authHeaders }
    );
  }

  setPrimaryUpi(vpa: string): Observable<any> {
    return this.http.post(
      `${this.base}/upi/set-primary`,
      null,
      { params: { vpa }, 
      // headers: this.authHeaders 
    }
    );
  }

  blockUpiId(vpa: string): Observable<any> {
    return this.http.post(
      `${this.base}/upi/block`,
      null,
      { params: { vpa },
      //  headers: this.authHeaders 
      }
    );
  }

  deleteUpiId(vpa: string): Observable<any> {
    return this.http.delete(
      `${this.base}/upi/delete`,
      { params: { vpa }, 
      // headers: this.authHeaders
     }
    );
  }

  updateUpiLimits(vpa: string, dailyLimit: number, perTxnLimit: number): Observable<any> {
    return this.http.put(
      `${this.base}/upi/limits`,
      null,
      { params: { vpa, dailyLimit, perTxnLimit }, 
      // headers: this.authHeaders 
    }
    );
  }

  lookupVpa(vpa: string): Observable<any> {
    return this.http.get(
      `${this.base}/upi/lookup`,
      { params: { vpa } }
    );
  }

  // ─────────────────────────────────────────────
  //  UPI PIN
  // ─────────────────────────────────────────────

  sendUpiPinOtp(vpa: string): Observable<any> {
    return this.http.post(
      `${this.base}/upi/pin/send-otp`,
      null,
      { params: { vpa }, 
      // headers: this.authHeaders
     }
    );
  }

  setUpiPin(payload: {
    vpa:         string;
    otp:         string;
    newPin:      string;
    confirmPin:  string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/upi/pin/set`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  changeUpiPin(payload: {
    vpa:         string;
    currentPin:  string;
    newPin:      string;
    confirmPin:  string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/upi/pin/change`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  // ─────────────────────────────────────────────
  //  UPI PAYMENTS
  // ─────────────────────────────────────────────

  upiPay(payload: {
    senderVpa:   string;
    receiverVpa: string;
    amount:      string;
    upiPin:      string;
    description?: string;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/upi/pay`,
      payload,
      // { headers: this.authHeaders }
    );
  }

  getUpiTransactions(vpa: string, page = 0, size = 15): Observable<any> {
    return this.http.get(
      `${this.base}/upi/transactions/${vpa}`,
      { params: { page, size }, 
      // headers: this.authHeaders 
    }
    );
  }
}