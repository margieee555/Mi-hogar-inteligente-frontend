import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const TOKEN_KEY = 'hogar360_token';
const USER_KEY = 'hogar360_user';

/**
 * Encapsula el acceso a localStorage. Si mañana cambia la estrategia
 * de almacenamiento (ej. cookies httpOnly), solo se toca este archivo.
 */
@Injectable({ providedIn: 'root' })
export class TokenStorageService {

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  saveUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) as User : null;
  }

  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
