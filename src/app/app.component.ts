import { Component, computed, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ThemeService } from './services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatButton, AsyncPipe, MatTooltip],
  template: `
    <section>
      <div
        class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span
            class="inline-flex items-center justify-center p-2 bg-primary rounded-md shadow-lg">
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <!-- ... -->
            </svg>
          </span>
        </div>
        <h3
          class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      <button
        mat-icon-button
        (click)="_themeService.toggleColorTheme()"
        [matTooltip]="themeTooltipText()">
        @if (isDark()) {
          <mat-icon class="font-icon text-yellow-300">light_mode</mat-icon>
        } @else {
          <mat-icon class="font-icon text-cyan-300">dark_mode</mat-icon>
        }
      </button>
    </section>
  `,
})
export class AppComponent implements OnInit {
  protected _themeService = inject(ThemeService);

  public isDark = this._themeService.isThemeDark;

  public themeTooltipText = computed(() =>
    this.isDark() ? 'Mudar para tema claro' : 'Mudar para tema escuro'
  );

  public ngOnInit(): void {
    this._themeService.setColorTheme(
      this._themeService.getPreferredColorTheme()
    );
  }
}
