import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
];
