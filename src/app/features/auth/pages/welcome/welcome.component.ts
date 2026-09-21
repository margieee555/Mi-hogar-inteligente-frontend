import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Pantalla de bienvenida (landing) de Hogar360.
 * Basada en el diseño original provisto (Tailwind + Material Symbols).
 */
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}
