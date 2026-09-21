import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * Interceptor funcional: centraliza el manejo de errores HTTP.
 * Si el backend responde 401, limpia la sesión y redirige al login.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const tokenStorage = inject(TokenStorageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        tokenStorage.clear();
        router.navigate(['/auth/login']);
      }
      return throwError(() => error);
    })
  );
};
