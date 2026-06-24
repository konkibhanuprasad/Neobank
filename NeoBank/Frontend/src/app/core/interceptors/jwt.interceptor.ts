// src/app/core/interceptors/jwt.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

const PUBLIC_ENDPOINTS = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/captcha',
  '/api/auth/check-username',
  '/api/auth/send-registration-otp',
  '/api/auth/forgot-username',
  '/api/auth/forgot-password',
  '/api/auth/reset-password',
  '/api/application/send-otp',
  '/api/application/submit',
  '/api/application/status',
  // '/api/upi/lookup',
];

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const isPublic = PUBLIC_ENDPOINTS.some(ep => req.url.includes(ep));

  if (token && !isPublic) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};