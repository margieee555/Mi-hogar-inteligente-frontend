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

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const { email, password } = this.form.getRawValue();

    this.authService.login({
      email: email!,
      password: password!
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/configuracion']); // <-- Tu nueva vista
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.errorMessage.set(
          err.error?.message ?? 'Correo o contraseña incorrectos'
        );
      }
    });
  }
}
