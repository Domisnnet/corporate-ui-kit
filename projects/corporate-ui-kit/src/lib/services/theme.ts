import { Injectable } from '@angular/core';

/**
 * Define a configuração do tema, permitindo quaisquer propriedades de string
 * que se mapeiam para variáveis CSS.
 */
export interface CukThemeConfig {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Aplica a configuração do tema ao elemento raiz do DOM.
   * @param config Um objeto onde as chaves são nomes de variáveis CSS e os valores são as cores.
   */
  public applyTheme(config: CukThemeConfig): void {
    const root = document.documentElement;

    if (!root) {
      console.error(
        'CUK ThemeService: Não foi possível acessar o elemento raiz (<html>).'
      );
      return;
    }

    // Itera sobre a configuração e define as propriedades CSS
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        root.style.setProperty(key, config[key]);
      }
    }

    console.log('CUK ThemeService: Tema personalizado aplicado com sucesso!');
  }
}
