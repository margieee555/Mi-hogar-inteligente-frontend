import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * Guard funcional (Angular 15+). Protege rutas privadas del layout principal.
 * Uso en app.routes.ts: canActivate: [authGuard]
 */
export const authGuard: CanActivateFn = () => {
  const tokenStorage = inject(TokenStorageService);
  const router = inject(Router);

  if (tokenStorage.isLoggedIn()) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
