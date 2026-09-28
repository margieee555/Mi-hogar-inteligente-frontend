import { CommonModule } from '@angular/common';
import { Component, signal, AfterViewInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { passwordMatchValidator } from '../../../../shared/validators/password-match.validator';
import { environment } from '../../../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements AfterViewInit {

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
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: passwordMatchValidator('password', 'confirmPassword')
    });
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (response: any) => this.handleGoogleCredential(response)
    });
    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large', width: 300 }
    );
  }

  private handleGoogleCredential(response: any): void {
    this.authService.loginWithGoogle(response.credential).subscribe({
      next: () => this.router.navigate(['/menu-principal']),
      error: () => this.errorMessage.set('No se pudo registrar con Google')
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(value => !value);
  }

  onSubmit(): void {
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      if (this.form.errors?.['passwordMismatch']) {
        this.errorMessage.set('Las contraseñas no coinciden');
      }

      return;
    }

    this.loading.set(true);

    const { name, email, password, confirmPassword } =
      this.form.getRawValue();

    this.authService.register({
      name: name!,
      email: email!,
      password: password!,
      confirmPassword: confirmPassword!
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.errorMessage.set(
          err.error?.message ??
          'No se pudo crear la cuenta. Intenta nuevamente.'
        );
      }
    });
  }
}