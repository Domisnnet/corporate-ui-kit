import { APP_INITIALIZER, ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

// Imports from the corporate-ui-kit library
import { CukThemeConfig, ThemeService } from 'corporate-ui-kit';

// Define your custom theme configuration
const customTheme: CukThemeConfig = {
  primary: '#6e41e2',      // A nice purple
  primaryDark: '#5835b0',
  secondary: '#f0f2f5',    // Light gray for backgrounds
  secondaryDark: '#d9dce1',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    ThemeService, // Provide the theme service
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const themeService = inject(ThemeService);
        return () => themeService.applyTheme(customTheme);
      },
      multi: true,
    },
  ],
};
