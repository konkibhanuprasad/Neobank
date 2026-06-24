// src/app/core/services/loan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoanService {

  private readonly base = `${environment.apiUrl}/loans`;

  constructor(private http: HttpClient) {}

  // ── EMI Calculator (public) ──
  calculateEmi(payload: {
    principal: string;
    annualRate: string;
    tenureMonths: number;
  }): Observable<any> {
    return this.http.post(
      `${this.base}/calculate-emi`, payload);
  }

  // ── Products ──
  getActiveProducts(): Observable<any> {
    return this.http.get(`${this.base}/products/active`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.base}/products`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.base}/products/${id}`);
  }

  createProduct(payload: any): Observable<any> {
    return this.http.post(`${this.base}/products`, payload);
  }

  updateProduct(id: number, payload: any): Observable<any> {
    return this.http.put(`${this.base}/products/${id}`, payload);
  }

  // ── Customer ──
  applyLoan(form: FormData): Observable<any> {
    return this.http.post(`${this.base}/apply`, form);
  }

  getMyLoans(): Observable<any> {
    return this.http.get(`${this.base}/my`);
  }

  getEmiSchedule(loanId: string): Observable<any> {
    return this.http.get(
      `${this.base}/${loanId}/emi-schedule`);
  }

  requestForeclosure(loanId: string): Observable<any> {
    return this.http.post(
      `${this.base}/${loanId}/foreclosure`, {});
  }

  manualPayEmi(loanId: string,
      emiId: number, note?: string): Observable<any> {
    return this.http.patch(
      `${this.base}/${loanId}/repayments/${emiId}/pay`,
      note ? { note } : {});
  }

  // ── Admin ──
  getAllLoans(status = '',
      page = 0, size = 15): Observable<any> {
    return this.http.get(`${this.base}/admin/all`,
      { params: { status, page, size } });
  }

  getLoanDetail(loanId: string): Observable<any> {
    return this.http.get(`${this.base}/admin/${loanId}`);
  }

  approveLoan(loanId: string,
      interestRate: string,
      treasuryId: number): Observable<any> {
    return this.http.post(
      `${this.base}/admin/${loanId}/approve`,
      { interestRate, treasuryId });
  }

  rejectLoan(loanId: string,
      reason: string): Observable<any> {
    return this.http.post(
      `${this.base}/admin/${loanId}/reject`,
      { reason });
  }

  approveForeclosure(loanId: string): Observable<any> {
    return this.http.post(
      `${this.base}/admin/${loanId}/foreclosure/approve`,
      {});
  }

  adminGetEmiSchedule(loanId: string): Observable<any> {
    return this.http.get(
      `${this.base}/admin/${loanId}/emi-schedule`);
  }

  adminManualPayEmi(loanId: string,
      emiId: number, note?: string): Observable<any> {
    return this.http.patch(
      `${this.base}/admin/${loanId}/repayments/${emiId}/pay`,
      note ? { note } : {});
  }
}