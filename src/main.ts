import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideToastr({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true,
    }),
  ],
});
