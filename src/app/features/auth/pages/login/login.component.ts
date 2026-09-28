import { CommonModule } from '@angular/common';
import { Component, signal, AfterViewInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {

  showPassword = signal(false);
  loading = signal(false);
  errorMessage = signal<string | null>(null);
  form;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
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
      error: () => this.errorMessage.set('No se pudo iniciar sesión con Google')
    });
  }

  togglePasswordVisibility(): void { this.showPassword.update(v => !v); }

  onSubmit(): void {
    // (sin cambios respecto a lo que ya tenías)
  }
}