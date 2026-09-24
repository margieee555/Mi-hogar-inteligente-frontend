import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
// 1. Agregamos la importación de tu nuevo componente
import { ConfiguracionInicialComponent } from './features/auth/pages/configuracion-inicial/configuracion-inicial.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  // 2. Registramos tu ruta de forma pública y directa
  { path: 'configuracion', component: ConfiguracionInicialComponent },

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

  // El comodín siempre debe ir de último
  { path: '**', redirectTo: 'auth/welcome' }
];