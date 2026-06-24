// src/app/core/services/application.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from './auth.service';

// ─────────────────────────────────────────────
//  INTERFACES
// ─────────────────────────────────────────────

export interface ApplicationListItem {
  applicationId:  string;
  fullName:       string;
  emailId:        string;
  phoneNumber:    string;
  accountType:    string;
  gender:         string;
  occupation:     string;
  currentCity:    string;
  currentState:   string;
  status:         string;
  submittedOn:    string;
  aadhaarNumber:  string;
  panNumber:      string;
}

export interface ApplicationDetail {
  // Basic
  applicationId:    string;
  status:           string;
  submittedOn:      string;
  approvedBy:       string | null;
  approvedAt:       string | null;
  rejectionReason:  string | null;
  // Personal
  accountType:      string;
  fullName:         string;
  fatherName:       string;
  motherName:       string;
  dateOfBirth:      string;
  gender:           string;
  maritalStatus:    string;
  nationality:      string;
  occupation:       string;
  annualIncome:     string;
  phoneNumber:      string;
  emailId:          string;
  aadhaarNumber:    string;
  panNumber:        string;
  // Address
  currentAddressLine:    string;
  currentCity:           string;
  currentState:          string;
  currentPincode:        string;
  permanentAddressLine:  string;
  permanentCity:         string;
  permanentState:        string;
  permanentPincode:      string;
  // Nominee
  nomineeName:           string;
  nomineeRelation:       string;
  nomineeAge:            string;
  nomineeMobileNumber:   string;
  nomineeAddress:        string;
  // Documents (base64)
  aadhaarCardFileType:          string;
  aadhaarCardFileBase64:        string;
  panCardFileType:              string;
  panCardFileBase64:            string;
  profilePhotoType:             string;
  profilePhotoBase64:           string;
  signatureImageType:           string;
  signatureImageBase64:         string;
  addressProofDocumentType:     string;
  addressProofDocumentBase64:   string;
  passportFileType:             string | null;
  passportFileBase64:           string | null;
  voterIdFileType:              string | null;
  voterIdFileBase64:            string | null;
}

export interface PageResponse<T> {
  success: boolean;
  message: string;
  data?: {
    content: T[];
    page: {
      size: number;
      number: number;
      totalElements: number;
      totalPages: number;
    };
  };
}

export interface ApproveRequest {
  applicationId:    string;
  action:           'APPROVE' | 'REJECT';
  rejectionReason?: string;
  branchName?:      string;
  branchCode?:      string;
  ifscCode?:        string;
}

export interface ApproveResponse {
  success: boolean;
  message: string;
  data?: {
    applicationId: string;
    status:        string;
    userId:        string;
    accountNumber: string;
    fullName:      string;
    emailId:       string;
    message:       string;
  };
}

export interface ApplicationResponse {
  success: boolean;
  message: string;
  data?: {
    applicationId: string;
    fullName:      string;
    accountType:   string;
    phoneNumber:   string;
    emailId:       string;
    submittedOn:   string;
    status:        string;
  };
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface ApplicationStatusResponse {
  success: boolean;
  message: string;
  data?: {
    applicationId:        string;
    fullName:             string;
    accountType:          string;
    phoneNumber:          string;
    emailId:              string;
    aadhaarNumber:        string;
    panNumber:            string;
    status:               string;
    submittedOn:          string;
    currentAddressLine:   string;
    currentCity:          string;
    currentState:         string;
    currentPincode:       string;
    permanentAddressLine: string;
    permanentCity:        string;
    permanentState:       string;
    permanentPincode:     string;
    nomineeName:          string;
    nomineeRelation:      string;
    nomineeAge:           string;
    nomineeMobileNumber:  string;
    nomineeAddress:       string;
    occupation:           string;
    annualIncome:         string;
    dateOfBirth:          string;
    gender:               string;
    nationality:          string;
    maritalStatus:        string;
    fatherName:           string;
    motherName:           string;
  };
}

// ─────────────────────────────────────────────
//  SERVICE
// ─────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ApplicationService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get authHeaders(): Record<string, string> | undefined {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : undefined;
  }

  // ─────────────────────────────────────────────
  //  PUBLIC — Submit application (guest)
  // ─────────────────────────────────────────────

  sendOtp(email: string): Observable<SendOtpResponse> {
    return this.http.post<SendOtpResponse>(
      `${this.base}/application/send-otp`,
      { email }
    );
  }

  submitApplication(formData: FormData): Observable<ApplicationResponse> {
    return this.http.post<ApplicationResponse>(
      `${this.base}/application/submit`,
      formData
    );
  }

  // ─────────────────────────────────────────────
  //  PUBLIC — Application status check
  // ─────────────────────────────────────────────

  sendStatusOtp(query: string): Observable<SendOtpResponse> {
    return this.http.post<SendOtpResponse>(
      `${this.base}/application/status/send-otp`,
      { query }
    );
  }

  verifyStatusOtp(query: string, otp: string): Observable<ApplicationStatusResponse> {
    return this.http.post<ApplicationStatusResponse>(
      `${this.base}/application/status/verify`,
      { query, otp }
    );
  }

  // ─────────────────────────────────────────────
  //  AUTHENTICATED — Submit application
  // ─────────────────────────────────────────────

  submitApplicationAuthenticated(formData: FormData): Observable<ApplicationResponse> {
    const headers = this.authHeaders;
    if (headers) {
      return this.http.post<ApplicationResponse>(
        `${this.base}/application/submit-auth`,
        formData,
        { headers }
      );
    }
    return this.http.post<ApplicationResponse>(`${this.base}/application/submit-auth`, formData);
  }

  // ─────────────────────────────────────────────
  //  ADMIN — Application management
  // ─────────────────────────────────────────────

  // getAllApplications(status?: string, page = 0, size = 10): Observable<PageResponse<ApplicationListItem>> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get<PageResponse<ApplicationListItem>>(
  //     `${this.base}/application/all`,
  //     { params }
  //   );
  // }

  getAllApplications(status?: string, page = 0, size = 10, search?: string): Observable<PageResponse<ApplicationListItem>> {
    const params: Record<string, string | number | boolean> = { page, size };
    if (status) params['status'] = status;
    if (search) params['search'] = search;
    return this.http.get<PageResponse<ApplicationListItem>>(
      `${this.base}/application/all`,
      { params }
    );
  }

  getApplicationDetail(applicationId: string): Observable<ApiResponse<ApplicationDetail>> {
    return this.http.get<ApiResponse<ApplicationDetail>>(
      `${this.base}/application/${applicationId}`
    );
  }

  approveApplication(req: ApproveRequest): Observable<ApproveResponse> {
    return this.http.post<ApproveResponse>(
      `${this.base}/application/approve`,
      req
    );
  }
}