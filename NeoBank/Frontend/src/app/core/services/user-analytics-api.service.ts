import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SpendingAnalyticsResponse, WealthAnalyticsResponse } from "../model/all";


@Injectable({
  providedIn: 'root'
})
export class UserAnalyticsApiService {

  private readonly baseUrl = `${environment.apiUrl}/api/analytics`;

  constructor(private http: HttpClient) {}

  getSpendingAnalytics(
    userId: number,
    months: number
  ): Observable<SpendingAnalyticsResponse> {

    const params = new HttpParams().set('months', months);

    return this.http.get<SpendingAnalyticsResponse>(
      `${this.baseUrl}/spending/${userId}`,
      { params }
    );
  }

  getWealthAnalytics(userId: number): Observable<WealthAnalyticsResponse> {
    return this.http.get<WealthAnalyticsResponse>(
      `${this.baseUrl}/wealth/${userId}`
    );
  }
}
