import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { jWTInterceptor } from './core/interceptors/jwt.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        jWTInterceptor,errorInterceptor,
      ])
    ),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(BrowserAnimationsModule),
    provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true,
    }),
  ]
};
