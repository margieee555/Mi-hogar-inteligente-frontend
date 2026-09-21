export interface AuthResponse {
  token: string;
  tokenType: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}
