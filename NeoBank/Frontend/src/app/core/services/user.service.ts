// src/app/core/services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }

  // ─────────────────────────────────────────────
  //  ADMIN
  // ─────────────────────────────────────────────

  // getAllUsers(status?: string, page = 0, size = 10): Observable<any> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get(
  //     `${this.base}/user/admin/all`,
  //     { params, headers: this.authHeaders }
  //   );
  // }

  getAllUsers(status?: string, page = 0, size = 10, search?: string): Observable<any> {
  let params: any = { page, size };
  if (status) params['status'] = status;
  if (search) params['search'] = search;
  return this.http.get(
    `${this.base}/user/admin/all`,
    { params, headers: this.authHeaders }
  );
}

  updateUserStatus(payload: {
    userId: number;
    status: string;
    reason: string;
  }): Observable<any> {
    return this.http.put(
      `${this.base}/user/admin/status`,
      payload,
      { headers: this.authHeaders }
    );
  }
}