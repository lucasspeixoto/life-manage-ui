import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  protected _themeService = inject(ThemeService);

  public ngOnInit() {
    const preferredColorTheme = 'dark'; //this._themeService.getPreferredColorTheme();

    this._themeService.setColorTheme(preferredColorTheme);
  }
}
