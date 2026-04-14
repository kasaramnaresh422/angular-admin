import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/users')
        .then(m => m.Users),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  }
];