import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TokenStorageService } from '../../../core/services/token-storage.service';
import { AuthResponse } from '../models/auth-response.model';
import { LoginRequest } from '../models/login-request.model';
import { RegisterRequest } from '../models/register-request.model';

/**
 * Único punto de contacto con los endpoints /api/v1/auth/** del backend.
 * Los componentes nunca llaman HttpClient directamente.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl = `${environment.apiUrl}/api/v1/auth`;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, request).pipe(
      tap(response => this.persistSession(response))
    );
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request).pipe(
      tap(response => this.persistSession(response))
    );
  }

  logout(): void {
    this.tokenStorage.clear();
    this.router.navigate(['/auth/welcome']);
  }

  private persistSession(response: AuthResponse): void {
    this.tokenStorage.saveToken(response.token);
    this.tokenStorage.saveUser({
      name: response.name,
      email: response.email,
      role: response.role
    });
  }
}
