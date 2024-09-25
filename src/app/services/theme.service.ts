import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

const LOCAL_STORAGE_KEY = 'LIFE_MANAGE:THEME';

type ColorThemeT = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _document = inject(DOCUMENT);

  public isThemeDark = signal(false);

  public getPreferredColorTheme = (): ColorThemeT => {
    const storedTheme = this._getStoredColorTheme();

    return storedTheme ? storedTheme : 'dark';
  };

  public changeColorThemeHandler(colorTheme: ColorThemeT): void {
    this._setStoredColorTheme(colorTheme);
    this.setColorTheme(colorTheme);
  }

  public setColorTheme = (colorTheme: ColorThemeT): void => {
    const isColorThemeDark = colorTheme === 'dark';

    this.isThemeDark.set(isColorThemeDark);

    if (isColorThemeDark) {
      this._document.documentElement.classList.add('dark');
    } else {
      this._document.documentElement.classList.remove('dark');
    }
  };

  public toggleColorTheme() {
    const colorTheme = this.isThemeDark() ? 'light': 'dark'
    this.changeColorThemeHandler(colorTheme);
  }

  private _setStoredColorTheme(colorTheme: ColorThemeT): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const storageThemeObject = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}';

    const parsedStorageThemeObject = JSON.parse(storageThemeObject);

    parsedStorageThemeObject.colorTheme = colorTheme;

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(parsedStorageThemeObject)
    );
  }

  private _getStoredColorTheme(): ColorThemeT | void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const storageThemeObject = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}';

    const parsedStorageThemeObject = JSON.parse(storageThemeObject);

    const colorTheme = parsedStorageThemeObject.colorTheme;

    return colorTheme;
  }
}
