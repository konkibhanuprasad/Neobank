// src/app/core/services/treasury.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TreasuryService {

  private readonly base = `${environment.apiUrl}/treasury`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.base);
  }

  getActive(): Observable<any> {
    return this.http.get(`${this.base}/active`);
  }

  getOne(id: number): Observable<any> {
    return this.http.get(`${this.base}/${id}`);
  }

  create(payload: {
    name: string; description?: string; initialBalance?: string;
  }): Observable<any> {
    return this.http.post(this.base, payload);
  }

  topUp(id: number, payload: {
    amount: string; description?: string;
  }): Observable<any> {
    return this.http.post(`${this.base}/${id}/topup`, payload);
  }

  updateStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.base}/${id}/status`,
      null, { params: { status } });
  }
}