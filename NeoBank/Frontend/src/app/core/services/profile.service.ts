// src/app/core/services/profile.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from './auth.service';

export interface UpdateProfilePayload {
  fullName?:    string;
  phone?:       string;
  dateOfBirth?: string;
  gender?:      string;
  addressLine?: string;
  city?:        string;
  state?:       string;
  pincode?:     string;
}

export interface UpdateEmailPayload {
  newEmail: string;
  otp:      string;
}

export interface ProfileData {
  userId: number;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  profilePhotoType: string;
  profilePhotoBase64: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {

  private readonly base = `${environment.apiUrl}/profile`;

  constructor(private http: HttpClient) {}

  getMyProfile(): Observable<ApiResponse<ProfileData>> {
    return this.http.get<ApiResponse<ProfileData>>(this.base);
  }

  updateProfile(payload: UpdateProfilePayload): Observable<ApiResponse<ProfileData>> {
    return this.http.put<ApiResponse<ProfileData>>(this.base, payload);
  }

  uploadPhoto(file: File): Observable<ApiResponse<ProfileData>> {
    const form = new FormData();
    form.append('photo', file, file.name);
    return this.http.post<ApiResponse<ProfileData>>(`${this.base}/photo`, form);
  }

  removePhoto(): Observable<ApiResponse<ProfileData>> {
    return this.http.delete<ApiResponse<ProfileData>>(`${this.base}/photo`);
  }

  sendEmailChangeOtp(newEmail: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.base}/email/send-otp`,
      null,
      { params: { newEmail } }
    );
  }

  updateEmail(payload: UpdateEmailPayload): Observable<ApiResponse<ProfileData>> {
    return this.http.put<ApiResponse<ProfileData>>(`${this.base}/email`, payload);
  }
}