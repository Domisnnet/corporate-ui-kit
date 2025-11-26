# MeuApp

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli).

## Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Assim que o servidor estiver em execução, abra seu navegador e acesse `http://localhost:4200/`. A aplicação recarregará automaticamente sempre que você modificar qualquer um dos arquivos de origem.

---

## Corporate UI Kit (`corporate-ui-kit`)

O **Corporate UI Kit** é uma biblioteca Angular dedicada, que funciona como "uma coleção de componentes, serviços e padrões de design padronizados para o ambiente corporativo". Seu propósito é permitir a construção rápida de aplicações profissionais, garantindo consistência visual e máxima performance em todos os projetos.

### Como Utilizar

A `corporate-ui-kit` é uma biblioteca dentro deste workspace. Sempre que você fizer alterações nela (como modificar um componente ou alterar as variáveis de cores), é **necessário** recompilar a biblioteca para que as mudanças fiquem disponíveis para a aplicação principal.

Para compilar a biblioteca, execute o seguinte comando:

```bash
ng build corporate-ui-kit
```

O servidor de desenvolvimento (`ng serve`) detecta as alterações na biblioteca compilada e recarrega a aplicação automaticamente.

### Sistema de Temas (Theming)

A `corporate-ui-kit` utiliza um sistema de temas baseado em variáveis CSS para garantir uma identidade visual consistente.

**Arquivo Principal do Tema:**
`projects/corporate-ui-kit/src/styles/theme-base.css`

Este arquivo centraliza todas as variáveis de cores da biblioteca. Para utilizá-las em sua aplicação (`myapp`), basta importar este arquivo no seu CSS principal (`src/styles.css`), como já está configurado:

```css
/* src/styles.css */
@import '~corporate-ui-kit/styles/theme-base.css';
```

**Variáveis de Cores Disponíveis:**

O prefixo `cuk-` (Corporate UI Kit) é usado para evitar conflitos com outras variáveis.

*   **Cores Primárias:**
    *   `--cuk-color-primary`: `#007bff` (Azul corporativo)
    *   `--cuk-color-primary-dark`: `#0056b3` (Variação mais escura para hover, etc.)
*   **Cores Secundárias:**
    *   `--cuk-color-secondary`: `#6c757d` (Cinza secundário)
    *   `--cuk-color-secondary-dark`: `#5a6268` (Variação mais escura)
*   **Cores de Feedback:**
    *   `--cuk-color-success`: `#28a745` (Indica sucesso)
    *   `--cuk-color-error`: `#dc3545` (Indica erro)

**Exemplo de Uso em um Componente:**

O exemplo abaixo mostra como as variáveis de cor são usadas para estilizar o componente `action-button` dentro da própria biblioteca:

```css
/* styles/action-button.css */

/* Botão Primário (Foco principal da aplicação) */
.primary {
  background-color: var(--cuk-color-primary);
  color: white; /* Cor do texto definida diretamente */
}

.primary:not(:disabled):hover {
  background-color: var(--cuk-color-primary-dark);
}

/* Botão Secundário */
.secondary {
  background-color: var(--cuk-color-secondary);
  color: white;
}
```
