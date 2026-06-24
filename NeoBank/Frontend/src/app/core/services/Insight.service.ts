import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FinancialInsights } from "../model/all";
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InsightsService {

    private readonly baseUrl = `${environment.apiUrl}/insights`;

    constructor(private http: HttpClient) { }

    getInsights(userId: number): Observable<FinancialInsights> {
        return this.http.get<FinancialInsights>(`${this.baseUrl}/${userId}`);
    }
}