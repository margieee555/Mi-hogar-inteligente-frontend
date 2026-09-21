# Mi Hogar Inteligente - Frontend

Aplicación Angular (standalone components) para consumir la API de Hogar360.

## Estructura

```
src/app/
├── core/         # Guards, interceptors, servicios singleton
├── shared/       # Componentes, validadores y pipes reutilizables
├── features/
│   └── auth/     # welcome, login, register + AuthService
└── layout/       # Shell principal (navbar/sidebar) para después del login
```

## Cómo correr

```bash
npm install
npm start
```

La app corre en `http://localhost:4200` y consume el backend en `http://localhost:8080`
(configurable en `src/environments/environment.ts`).

## Flujo de autenticación

1. `welcome` → botones a `login` / `register`
2. `register` → `AuthService.register()` → guarda token en localStorage → redirige a `/dashboard`
3. `login` → `AuthService.login()` → mismo flujo
4. `authInterceptor` agrega el JWT a cada request saliente
5. `authGuard` protege rutas privadas (`/dashboard` y las que vengan después)
6. `errorInterceptor` desloguea automáticamente si el backend responde 401
