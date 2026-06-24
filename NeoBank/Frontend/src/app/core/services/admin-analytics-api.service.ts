import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLoanAnalyticsResponse, AdminTransactionAnalyticsResponse } from '../model/all';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminAnalyticsApiService {

  private readonly baseUrl = `${environment.apiUrl}/admin/analytics`;

  constructor(private http: HttpClient) {}

  // ✅ Transaction Analytics
  getTransactionAnalytics(timeframe: string): Observable<AdminTransactionAnalyticsResponse> {
    const params = new HttpParams().set('timeframe', timeframe);

    return this.http.get<AdminTransactionAnalyticsResponse>(
      `${this.baseUrl}/transactions`,
      { params }
    );
  }

  // ✅ Loan Analytics
  getLoanAnalytics(timeframe: string): Observable<AdminLoanAnalyticsResponse> {
    const params = new HttpParams().set('timeframe', timeframe);

    return this.http.get<AdminLoanAnalyticsResponse>(
      `${this.baseUrl}/loans`,
      { params }
    );
  }
}