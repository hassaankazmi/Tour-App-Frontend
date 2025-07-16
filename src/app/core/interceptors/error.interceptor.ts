import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export class ErrorInterceptor implements HttpInterceptor {
  private readonly routes: Router = inject(Router);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle specific status codes
        const toastr: ToastrService = inject(ToastrService);
        switch (error.status) {
          case 0:
            toastr.error('Network error. Please check your internet connection.');
            break;
          case 400:
            toastr.error(error.error?.message || 'Bad request.');
            break;
          case 401:
            toastr.error('Session expired. Please log in again.');
            this.routes.navigateByUrl('/');
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
  }
}

