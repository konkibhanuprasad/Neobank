import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PageResponse, SystemAuditLog } from '../model/all';

@Injectable({
  providedIn: 'root'
})
export class SystemLogApiService {

  private readonly baseUrl = `${environment.apiUrl}/api/admin/system-logs`;

  constructor(private http: HttpClient) {}

  getSystemLogs(
    page: number = 0,
    size: number = 20,
    status?: number
  ): Observable<PageResponse<SystemAuditLog>> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // ✅ Handle status correctly (0 should not be ignored)
    if (status !== undefined) {
      params = params.set('status', status.toString());
    }

    return this.http.get<PageResponse<SystemAuditLog>>(
      this.baseUrl,
      { params }
    );
  }
}
