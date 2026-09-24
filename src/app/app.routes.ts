import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ConfiguracionInicialComponent } from './features/auth/pages/configuracion-inicial/configuracion-inicial.component';
import { MenuPrincipalComponent } from './features/auth/pages/menu-principal/menu-principal.component';
import { FinanzasComponent } from './features/auth/pages/finanzas/finanzas.component';
import { InventarioComponent } from './features/auth/pages/inventario/inventario.component';
// Importación del nuevo componente de Compras
import { ComprasComponent } from './features/auth/pages/compras/compras.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  { path: 'configuracion', component: ConfiguracionInicialComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'finanzas', component: FinanzasComponent },
  { path: 'inventario', component: InventarioComponent },
  
  // Nueva ruta de compras registrada
  { path: 'compras', component: ComprasComponent },

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