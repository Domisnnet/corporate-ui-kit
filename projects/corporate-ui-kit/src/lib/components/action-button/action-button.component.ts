import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cuk-action-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="action.emit()" [class]="buttonClass()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      border: none;
    }

    .primary {
      background-color: var(--cuk-primary);
      color: white;
    }

    .primary:hover {
      background-color: var(--cuk-primary-dark);
    }

    .secondary {
      background-color: var(--cuk-secondary);
      color: white;
    }

    .secondary:hover {
      background-color: var(--cuk-secondary-dark);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  public type = input<'primary' | 'secondary'>('primary');
  public action = output<void>();

  public buttonClass = () => this.type();
}
