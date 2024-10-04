import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatFormField,
    ReactiveFormsModule,
    MatLabel,
    MatError,
    MatInput,
    MatIcon,
    MatIconButton,
    MatSuffix,
  ],
  templateUrl: './login.component.html',
  styles: ``,
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class LoginComponent {
  public hide = signal(true);

  public clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
