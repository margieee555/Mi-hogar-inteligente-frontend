import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador de formulario (no de campo) que compara password y confirmPassword.
 * Se aplica a nivel de FormGroup:
 *   this.form = fb.group({ password: [...], confirmPassword: [...] }, {
 *     validators: passwordMatchValidator('password', 'confirmPassword')
 *   });
 */
export function passwordMatchValidator(passwordKey: string, confirmKey: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirmPassword = group.get(confirmKey)?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}
