import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  private base = environment.apiUrl;

 constructor(private http: HttpClient) {}

  getAdminStats(): Observable<any> {
  return this.http.get(`${this.base}/admin/stats`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
  
}

getDashboard(){
  return this.http.get('/api/admin/dashboard');
}
  
}