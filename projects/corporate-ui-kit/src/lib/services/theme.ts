import { Injectable } from '@angular/core';

export interface CukThemeConfig {
  primary?: string;
  secondary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  /**
   * Aplica as cores de tema customizadas ao elemento body ou root da aplicação.
   * @param config Objeto com as cores novas (ex: { primary: '#FF5733' })
   */
  public applyTheme(config: CukThemeConfig): void {
    const root = document.documentElement; 
    
    if (config.primary) {
      root.style.setProperty('--cuk-color-primary', config.primary);
    }

    if (config.secondary) {
      root.style.setProperty('--cuk-color-secondary', config.secondary);
    }

    console.log('CUK: Tema personalizado aplicado com sucesso!');
  }
}