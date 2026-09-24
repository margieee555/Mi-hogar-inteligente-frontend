import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ConfiguracionInicialComponent } from './features/auth/pages/configuracion-inicial/configuracion-inicial.component';
import { MenuPrincipalComponent } from './features/auth/pages/menu-principal/menu-principal.component';
// 1. Importación del nuevo componente de Finanzas
import { FinanzasComponent } from './features/auth/pages/finanzas/finanzas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  { path: 'configuracion', component: ConfiguracionInicialComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  
  // 2. Nueva ruta registrada
  { path: 'finanzas', component: FinanzasComponent },

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/auth/pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },

  { path: '**', redirectTo: 'auth/welcome' }
];