import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  // Estado general
  isDarkMode = false;
  modalActivo: string | null = null;
  miembroSeleccionado: any = null;

  // Base de datos simulada
  usuarioActual = {
    nombre: 'Julian Esteban',
    correo: 'julian.esteban@mihogar360.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaMLnXonY7irP2MmMS9udzB4KXyc06gdS8MC6aXvPjGXS2XqCkndrSLUr5HeVMJN55fndW7qWyrMzLG26qyC97xfW2MejrTyRFun4ex1tYQ14yWMIj_Ov1inHe1GF7uzRS6YB4m5fvxIC7okNngPEEOVDK4do_qat7Lz7a-v-me3bRpPZo0eK7m43-oKIrpoIl5zCwg-nVqed80d-b6o5Si6nLbk5R3tH5xS-pWkvW9MXH5nLdvBnAeA',
    rol: 'Administrador',
    plan: 'Cuenta Premium'
  };

  miembros = [
    {
      id: 1,
      nombre: 'Nicol García',
      correo: 'nicol@mihogar360.com',
      rol: 'Miembro',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb89Y92JUh2QrSjolnoSux11t10qqjy2mWDqbIW7b60PxUdG5imn7l4qkuo8u6jD-IdufrSfz1Ms14uSqGb8MfAMIykpTAPSHVtBjONjKP3FhQ6k3O-iXUtOKOnZe-RTsiC2YG-AEgmy9bOC35rPSR6hAvgKvhidrZ5gaWuE4pN7y662IGKstoChrzBFuyyghdAYrMC5jmcvNOvurG6BP8jlEmseUG1TDB-UrvpZMv9flYNCJkOaj9PQ',
      inicial: null,
      colorInicial: '',
      tareasListas: 12,
      ahorroMensual: 450,
      tareas: [
        { id: 101, nombre: 'Pagar recibo de luz', completada: false, badge: 'Alta Prioridad', badgeClase: 'bg-red-50 text-red-600' },
        { id: 102, nombre: 'Comprar despensa semanal', completada: false, badge: 'En curso', badgeClase: 'bg-gray-100 text-gray-600' }
      ]
    },
    {
      id: 2,
      nombre: 'Luis Mendoza',
      correo: 'luis@mihogar360.com',
      rol: 'Invitado',
      avatar: null,
      inicial: 'L',
      colorInicial: 'bg-orange-100 text-orange-700',
      tareasListas: 5,
      ahorroMensual: 120,
      tareas: []
    }
  ];

  invitacionesPendientes = [
    { correo: 'familia@email.com', tiempo: 'Enviada hace 2 días', estado: 'Pendiente' }
  ];

  // Métodos de interacción
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const htmlTag = document.documentElement;
    if (this.isDarkMode) {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }

  abrirModalMiembro(miembro: any) {
    this.miembroSeleccionado = miembro;
    this.modalActivo = 'detalle-miembro';
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalActivo = null;
    document.body.style.overflow = '';
  }

  toggleTareaMiembro(tarea: any) {
    tarea.completada = !tarea.completada;
  }

  editarPerfil() {
    console.log('Abriendo edición de perfil...');
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
  }
}