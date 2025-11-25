import { Injectable } from '@angular/core';

export interface CukThemeConfig {
  primary?: string; 
  primaryDark?: string; 
  secondary?: string;
  secondaryDark?: string;
}

@Injectable({
  // Garante que o serviço seja um Singleton disponível em toda a aplicação (library)
  providedIn: 'root' 
})
export class ThemeService {

  constructor() { }

  /**
   * 2. Mapeamento entre a chave TypeScript e a variável CSS
   * Isso nos permite iterar sobre as chaves e aplicar o prefixo correto.
   */
  private themeMap: { [key in keyof CukThemeConfig]: string } = {
    primary: '--cuk-color-primary',
    primaryDark: '--cuk-color-primary-dark',
    secondary: '--cuk-color-secondary',
    secondaryDark: '--cuk-color-secondary-dark'
  };

  /**
   * Aplica as cores de tema customizadas no elemento raiz do DOM (:root).
   * @param config Objeto com as cores novas a serem aplicadas.
   */
  public applyTheme(config: CukThemeConfig): void {
    // Obtém a referência ao elemento raiz do documento (<html>)
    const root = document.documentElement; 
    
    if (!root) {
      console.error('CUK ThemeService: Não foi possível acessar o elemento raiz do documento (<html>).');
      return;
    }

    // Itera sobre as configurações passadas pelo usuário
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const themeKey = key as keyof CukThemeConfig;
        const cssVariable = this.themeMap[themeKey];
        const colorValue = config[themeKey];
        
        if (cssVariable && colorValue) {
          root.style.setProperty(cssVariable, colorValue);
        }
      }
    }

    console.log('CUK ThemeService: Tema personalizado aplicado com sucesso!');
  }
}