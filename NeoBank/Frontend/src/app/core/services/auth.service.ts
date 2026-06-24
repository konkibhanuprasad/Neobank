// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  status: number;
  errorCode?: string;
  data?: T;
}

export interface CaptchaResponse {
  token: string;
  captchaText: string;
}

export interface UsernameCheckResponse {
  username: string;
  available: boolean;
  message: string;
}

export interface RegisterResponse {
  userId: number;
  email: string;
  username: string;
  message: string;
}

export interface LoginResponse {
  userId: number;
  username: string;
  email: string;
  fullName: string;
  accountNumber: string;
  role: string;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private base = `${environment.apiUrl}/auth`;

  private readonly tokenKey = 'token';

  constructor(private http: HttpClient) { }

  // ── Captcha ──
  getCaptcha(): Observable<ApiResponse<CaptchaResponse>> {
    return this.http.get<ApiResponse<CaptchaResponse>>(`${this.base}/captcha`);
  }

  // ── Username check ──
  checkUsername(username: string): Observable<ApiResponse<UsernameCheckResponse>> {
    return this.http.get<ApiResponse<UsernameCheckResponse>>(
      `${this.base}/check-username`, { params: { username } }
    );
  }

  // ── Send registration OTP ──
  sendRegistrationOtp(payload: {
    email: string;
    captchaToken: string;
    captchaAnswer: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/send-registration-otp`, payload
    );
  }

  // ── Register ──
  register(payload: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    otp: string;
  }): Observable<ApiResponse<RegisterResponse>> {
    return this.http.post<ApiResponse<RegisterResponse>>(
      `${this.base}/register`, payload
    );
  }

  // ── Login ──
  login(payload: {
    usernameOrEmail: string;
    password: string;
  }): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(
      `${this.base}/login`, payload
    );
  }

  // ── Resend OTP ──
  resendOtp(email: string, purpose: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/resend-otp`, { email, purpose }
    );
  }

  // ── Forgot Username ──
  forgotUsername(payload: {
    email: string;
    captchaToken: string;
    captchaAnswer: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/forgot-username`, payload
    );
  }

  verifyForgotUsernameOtp(payload: {
    email: string;
    otp: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/forgot-username/verify`, payload
    );
  }

  // ── Forgot Password ──
  forgotPassword(payload: {
    email: string;
    captchaToken: string;
    captchaAnswer: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/forgot-password`, payload
    );
  }

  resetPassword(payload: {
    email: string;
    otp: string;
    newPassword: string;
    confirmPassword: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/reset-password`, payload
    );
  }

  changePassword(payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/change-password`, payload
      // ,
      // { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
  }


  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  getLoggedInUserId(): number {
    const userJson = localStorage.getItem('user');

    if (!userJson) {
      console.error('User not found in localStorage');
      return 0;
    }


    try {
      const user = JSON.parse(userJson);

      const userId = Number(user.userId);

      if (Number.isNaN(userId) || userId <= 0) {
        console.error('Invalid userId found:', user);
        return 0;
      }

      return userId;
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return 0;
    }
  }


  hasRole(role: string): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = this.decodeToken(token);
    const roles = payload.roles || payload.authorities || payload.role;

    if (!roles) {
      return false;
    }

    if (Array.isArray(roles)) {
      return roles.includes(role) || roles.includes(`ROLE_${role}`);
    }

    return roles === role || roles === `ROLE_${role}`;
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decodePayload = atob(payload);

      return JSON.parse(decodePayload);
    } catch (error) {
      throw new Error('Invalid JWT token');
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}