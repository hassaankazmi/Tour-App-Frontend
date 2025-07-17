// error.interceptor.ts
import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const toastr = inject(ToastrService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 0:
          toastr.error('Network error. Please check your internet connection.');
          break;
        case 400:
          toastr.error(error.error?.message || 'Bad request.');
          break;
        case 401:
          toastr.error('Session expired. Please log in again.');
          router.navigateByUrl('/');
          break;
        case 403:
          toastr.warning('Access denied.');
          break;
        case 404:
          toastr.error('Not found.');
          break;
        case 500:
        case 502:
        case 503:
          toastr.error('Server error. Please try again later.');
          break;
        default:
          toastr.error(error.message || 'Something went wrong.');
          break;
      }

      return throwError(() => error);
    })
  );
};
