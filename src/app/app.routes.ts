import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ConfiguracionInicialComponent } from './features/configuracion-inicial/pages/configuracion-inicial/configuracion-inicial.component';
import { MenuPrincipalComponent } from './features/menu-principal/pages/menu-principal/menu-principal.component';
import { FinanzasComponent } from './features/finanzas/pages/finanzas/finanzas.component';
import { InventarioComponent } from './features/inventario/pages/inventario/inventario.component';
import { ComprasComponent } from './features/compras/pages/compras/compras.component';
import { TareasComponent } from './features/tareas/pages/tareas/tareas.component';
import { PerfilComponent } from './features/perfil/pages/perfil/perfil.component';
// Importación del nuevo componente de Estadísticas
import { EstadisticasComponent } from './features/estadisticas/pages/estadisticas/estadisticas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/welcome', pathMatch: 'full' },

  { path: 'configuracion', component: ConfiguracionInicialComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'finanzas', component: FinanzasComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'perfil', component: PerfilComponent },
  
  // Nueva ruta de Estadísticas registrada
  { path: 'estadisticas', component: EstadisticasComponent },

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