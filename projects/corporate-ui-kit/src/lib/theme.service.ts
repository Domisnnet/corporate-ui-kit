import { Injectable } from '@angular/core';

export interface CukThemeConfig {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  applyTheme(theme: CukThemeConfig): void {
    const root = document.documentElement;
    root.style.setProperty('--cuk-primary', theme.primary);
    root.style.setProperty('--cuk-primary-dark', theme.primaryDark);
    root.style.setProperty('--cuk-secondary', theme.secondary);
    root.style.setProperty('--cuk-secondary-dark', theme.secondaryDark);
  }
}
