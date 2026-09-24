import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ConfiguracionInicialComponent } from './features/auth/pages/configuracion-inicial/configuracion-inicial.component';
// Ruta corregida apuntando a la carpeta "auth" donde lo creaste
import { MenuPrincipalComponent } from './features/auth/pages/menu-principal/menu-principal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  { path: 'configuracion', component: ConfiguracionInicialComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },

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