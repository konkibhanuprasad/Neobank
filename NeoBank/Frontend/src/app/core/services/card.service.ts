// src/app/core/services/card.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CardService {

  private readonly base = `${environment.apiUrl}/cards`;

  constructor(private http: HttpClient) {}

  issueCard(payload: {
    accountNumber: string; network?: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/issue`, payload);
  }

  // getMyCards(): Observable<any> {
  //   return this.http.get(`${this.base}/my`);
  // }

  // blockCard(cardId: number, reason?: string): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/block`,
  //     null, { params: reason ? { reason } : {} });
  // }

  // unblockCard(cardId: number): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/unblock`, {});
  // }

  // updateLimits(cardId: number, payload: {
  //   onlineLimit?: string; atmLimit?: string; dailyLimit?: string;
  // }): Observable<any> {
  //   return this.http.put(`${this.base}/${cardId}/limits`, payload);
  // }

  // sendPinOtp(cardId: number): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/pin/send-otp`, {});
  // }

  setPin(payload: {
    cardId: string; otp: string; newPin: string; confirmPin: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/pin/set`, payload);
  }

  // requestReplacement(payload: {
  //   cardId: string; reason: string;
  // }): Observable<any> {
  //   return this.http.post(`${this.base}/replacement`, payload);
  // }

  // getCardTransactions(cardId: number,
  //   page = 0, size = 15): Observable<any> {
  //   return this.http.get(`${this.base}/${cardId}/transactions`,
  //     { params: { page, size } });
  // }

  // sendTransferOtp(cardNumber: string): Observable<any> {
  //   return this.http.post(`${this.base}/transfer/send-otp`,
  //     null, { params: { cardNumber } });
  // }

  cardTransfer(payload: {
    senderCardNumber: string;
    beneficiaryCardNumber: string;
    amount: string;
    cardPin: string;
    otp: string;
    description?: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/transfer`, payload);
  }


   // ── Customer ──
  requestCard(payload: {
    accountNumber: string; network?: string; requestReason?: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/request`, payload);
  }

  getMyCards(): Observable<any> {
    return this.http.get(`${this.base}/my`);
  }

  sendRevealOtp(cardId: number): Observable<any> {
    return this.http.post(`${this.base}/${cardId}/details/send-otp`, {});
  }

  revealCardDetails(payload: {
    cardId: string; otp: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/details/reveal`, payload);
  }

  sendPinOtp(cardId: number): Observable<any> {
    return this.http.post(`${this.base}/${cardId}/pin/send-otp`, {});
  }

  changePin(payload: {
    cardId: string; otp: string; newPin: string; confirmPin: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/pin/change`, payload);
  }

  blockCard(cardId: number, reason?: string): Observable<any> {
    return this.http.post(`${this.base}/${cardId}/block`,
      null, { params: reason ? { reason } : {} });
  }

  unblockCard(cardId: number): Observable<any> {
    return this.http.post(`${this.base}/${cardId}/unblock`, {});
  }

  updateLimits(cardId: number, payload: {
    onlineLimit?: string; atmLimit?: string; dailyLimit?: string;
  }): Observable<any> {
    return this.http.put(`${this.base}/${cardId}/limits`, payload);
  }

  requestReplacement(payload: {
    cardId: string; reason: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/replacement`, payload);
  }

  getCardTransactions(cardId: number,
      page = 0, size = 15): Observable<any> {
    return this.http.get(`${this.base}/${cardId}/transactions`,
      { params: { page, size } });
  }

  sendTransferOtp(cardNumber: string): Observable<any> {
    return this.http.post(`${this.base}/transfer/send-otp`,
      null, { params: { cardNumber } });
  }

  cardBankTransfer(payload: {
    senderCardNumber: string;
    senderCardholderName: string;
    senderExpiry: string;
    senderCvv: string;
    receiverAccountNumber: string;
    receiverIfsc: string;
    receiverName: string;
    amount: string;
    otp: string;
    description?: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/transfer`, payload);
  }

  // ── Admin ──
  getAllCards(filter = '', page = 0, size = 15): Observable<any> {
    return this.http.get(`${this.base}/admin/all`,
      { params: { filter, page, size } });
  }

  approveCard(cardId: number): Observable<any> {
    return this.http.post(`${this.base}/admin/${cardId}/approve`, {});
  }

  rejectCard(cardId: number, rejectionReason: string): Observable<any> {
    return this.http.post(`${this.base}/admin/${cardId}/reject`,
      { rejectionReason });
  }

  adminBlockCard(cardId: number, reason?: string): Observable<any> {
    return this.http.post(`${this.base}/admin/${cardId}/block`,
      null, { params: reason ? { reason } : {} });
  }

  adminUnblockCard(cardId: number): Observable<any> {
    return this.http.post(`${this.base}/admin/${cardId}/unblock`, {});
  }
}