// //------------------------- auth.interceptor.ts -----------------------------//
// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     // alert(token);
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }

//   return next(req);
// };


// // auth.interceptor.ts
// import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { catchError, throwError } from 'rxjs';
// import { Router } from '@angular/router';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const router = inject(Router);

//   return next(req).pipe(
//     catchError((error: HttpErrorResponse) => {
//       if (error.status === 401) {
//         alert('Session expired. Please log in again.');
//         router.navigate(['/login']);
//       }
//       return throwError(() => error);
//     })
//   );
// };


import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken();

    if (token) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}

