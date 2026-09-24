import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  showPassword = signal(false);
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(value => !value);
  }

  onSubmit(): void {
    this.errorMessage.set(null);

    // 1. Mantenemos la validación visual (verifica que los campos no estén vacíos)
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // 2. Activamos la animación de "Ingresando..." en el botón
    this.loading.set(true);

    // 3. Simulamos que piensa por 1 segundo y luego redirigimos forzosamente a tu nueva página
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(['/configuracion']);
    }, 1000);
  }
}