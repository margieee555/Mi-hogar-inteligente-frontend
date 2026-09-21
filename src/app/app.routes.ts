import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    // Placeholder: aquí se conectará el layout principal (navbar + sidebar)
    // cuando se agreguen los módulos de finanzas, tareas e inventario.
    loadComponent: () => import('./features/auth/pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },

  { path: '**', redirectTo: 'auth/welcome' }
];
