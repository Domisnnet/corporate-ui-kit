import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cuk-action-button',
  template: `
    <button
      class="cuk-btn"
      [class]="type()"
      [disabled]="disabled()">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./action-button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonComponent {
  type = input<'primary' | 'secondary'>('primary'); // Controla a cor/estilo
  disabled = input(false); // Controla o estado
}