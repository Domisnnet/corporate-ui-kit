import { APP_INITIALIZER, ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

// Imports from the corporate-ui-kit library
import { CukThemeConfig, ThemeService } from 'corporate-ui-kit';

// Define your custom theme configuration
const customTheme: CukThemeConfig = {
  '--cuk-primary-color': '#6e41e2',      // A nice purple
  '--cuk-secondary-color': '#f0f2f5',    // Light gray for backgrounds
  '--cuk-success-color': '#4caf50',      // A friendly green
  '--cuk-danger-color': '#f44336',       // A standard red
  '--cuk-warning-color': '#ff9800',      // A vibrant orange
  '--cuk-info-color': '#2196f3',         // A clear blue
  '--cuk-light-color': '#ffffff',        // White
  '--cuk-dark-color': '#212121',         // Dark Gray
  '--cuk-text-color': '#333333',         // Primary text color
  '--cuk-background-color': '#f0f2f5',   // Background color
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
