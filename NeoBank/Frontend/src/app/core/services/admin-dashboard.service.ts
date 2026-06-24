import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDashboard } from '../model/all';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private readonly baseUrl = 'http://localhost:8765/api/admin';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<AdminDashboard> {
    return this.http.get<AdminDashboard>(`${this.baseUrl}/dashboard`);
  }

  getPendingApprovals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pending-approvals`);
  }

  getSystemHealth(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/system-health`);
  }

  updateUserStatus(userId: number, active: boolean): Observable<void> {
    return this.http.patch<void>(
      `${this.baseUrl}/users/${userId}/status`,
      { active }
    );
  }
}