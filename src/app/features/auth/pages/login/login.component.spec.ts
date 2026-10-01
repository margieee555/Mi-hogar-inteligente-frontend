import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {

    const authServiceMock = {
      loginWithGoogle: jasmine.createSpy('loginWithGoogle')
    };

    const routerMock = {
      navigate: jasmine.createSpy('navigate'),
      events: of()
    };

    const activatedRouteMock = {
      snapshot: {
        params: {},
        queryParams: {},
        data: {}
      },
      params: of({}),
      queryParams: of({}),
      url: of([]),
      fragment: of(null),
      data: of({})
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock
        },
        {
          provide: Router,
          useValue: routerMock
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear el formulario de login', () => {
    expect(component.form).toBeTruthy();
  });

  it('el correo debería ser obligatorio', () => {
    const email = component.form.controls.email;

    email.setValue('');

    expect(email.hasError('required')).toBeTrue();
  });

  it('el correo debería tener un formato válido', () => {
    const email = component.form.controls.email;

    email.setValue('correo-no-valido');

    expect(email.hasError('email')).toBeTrue();
  });

  it('debería aceptar un correo válido', () => {
    const email = component.form.controls.email;

    email.setValue('usuario@gmail.com');

    expect(email.valid).toBeTrue();
  });

  it('la contraseña debería ser obligatoria', () => {
    const password = component.form.controls.password;

    password.setValue('');

    expect(password.hasError('required')).toBeTrue();
  });

  it('debería aceptar un formulario válido', () => {
    component.form.setValue({
      email: 'usuario@gmail.com',
      password: '123456'
    });

    expect(component.form.valid).toBeTrue();
  });

  it('debería cambiar la visibilidad de la contraseña', () => {
    expect(component.showPassword()).toBeFalse();

    component.togglePasswordVisibility();

    expect(component.showPassword()).toBeTrue();

    component.togglePasswordVisibility();

    expect(component.showPassword()).toBeFalse();
  });

});