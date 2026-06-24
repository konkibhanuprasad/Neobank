// // src/app/core/interceptors/jwt.interceptor.ts

// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor, HttpRequest,
//   HttpHandler, HttpEvent, HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Router } from '@angular/router';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//   constructor(private router: Router) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token');

//     // Skip auth header for public endpoints
//     const publicEndpoints = [
//       '/api/auth/login',
//       '/api/auth/register',
//       '/api/auth/captcha',
//       '/api/auth/check-username',
//       '/api/auth/send-registration-otp',
//       '/api/auth/forgot-username',
//       '/api/auth/forgot-password',
//       '/api/auth/reset-password',
//       '/api/application/send-otp',
//       '/api/application/submit',
//       '/api/application/status',
//       '/api/upi/lookup',
//     ];

//     const isPublic = publicEndpoints.some(ep => req.url.includes(ep));

//     // Attach token if available and not public
//     if (token && !isPublic) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     return next.handle(req).pipe(
//       catchError((err: HttpErrorResponse) => {
//         // Token expired or invalid → redirect to login
//         if (err.status === 401) {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           this.router.navigate(['/login']);
//         }
//         return throwError(() => err);
//       })
//     );
//   }
// }