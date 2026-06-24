import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'Something went wrong. Please try again.';

        if (error.status === 0) {
          message = 'Backend server is not reachable.';
        } else if (error.status === 400) {
          message = error.error?.message || 'Invalid request.';
        } else if (error.status === 401) {
          message = 'Session expired. Please login again.';
        } else if (error.status === 403) {
          message = 'You are not allowed to access this resource.';
        } else if (error.status === 404) {
          message = 'Requested resource not found.';
        } else if (error.status >= 500) {
          message = 'Server error occurred. Please try later.';
        }

        this.notificationService.danger(message);
        return throwError(() => error);
      })
    );
  }
}