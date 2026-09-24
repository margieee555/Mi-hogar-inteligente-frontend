import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importante para que funcionen los formularios
  templateUrl: './configuracion-inicial.component.html',
  styleUrl: './configuracion-inicial.component.scss' // Asegúrate de que termine en .scss
})
export class ConfiguracionInicialComponent {
  // Variables de estado del componente
  pasoActual = 1;
  MIN_RESIDENTES = 1;
  MAX_RESIDENTES = 20;
  cargando = false;

  // Modelo de datos consolidado
  datosHogar = {
    nombreHogar: '',
    tipoVivienda: 'Casa',
    numeroResidentes: 1,
    direccionHogar: '',
    invitados: [''], // Iniciamos con un campo vacío para el primer invitado
    zonas: ['Sala de estar', 'Habitación principal'] // Seleccionadas por defecto
  };

  // Mensajes de error
  mensajeNombre = '';
  mensajeInvitados = '';
  mensajeErrorZonas = '';

  // Lista de zonas disponibles renderizadas dinámicamente
  zonasDisponibles = [
    { nombre: 'Sala de estar', icono: 'living' },
    { nombre: 'Habitación principal', icono: 'bed' },
    { nombre: 'Cocina', icono: 'countertops' },
    { nombre: 'Comedor', icono: 'dining' },
    { nombre: 'Baño principal', icono: 'shower' },
    { nombre: 'Estudio / Oficina', icono: 'desk' },
    { nombre: 'Jardín / Patio', icono: 'yard' },
    { nombre: 'Garaje', icono: 'garage' }
  ];

  // Métodos del Paso 1
  seleccionarVivienda(tipo: string) {
    this.datosHogar.tipoVivienda = tipo;
  }

  aumentarResidentes() {
    if (this.datosHogar.numeroResidentes < this.MAX_RESIDENTES) {
      this.datosHogar.numeroResidentes++;
    }
  }

  disminuirResidentes() {
    if (this.datosHogar.numeroResidentes > this.MIN_RESIDENTES) {
      this.datosHogar.numeroResidentes--;
    }
  }

  siguientePaso1() {
    if (this.datosHogar.nombreHogar.trim() === '') {
      this.mensajeNombre = 'Por favor, escribe un nombre para tu hogar.';
      return;
    }
    this.mensajeNombre = '';
    this.cambiarPaso(2);
  }

  // Métodos del Paso 2
  agregarInvitado() {
    this.datosHogar.invitados.push('');
  }

  eliminarInvitado(index: number) {
    this.datosHogar.invitados.splice(index, 1);
  }

  // Función para optimizar el renderizado del ngFor en inputs
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  siguientePaso2() {
    this.mensajeInvitados = '';
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Filtramos los correos vacíos
    const correosValidos = this.datosHogar.invitados.filter(c => c.trim() !== '');
    
    if (correosValidos.length > 0 && correosValidos.some(c => !regexEmail.test(c))) {
      this.mensajeInvitados = 'Por favor, introduce correos electrónicos válidos.';
      return;
    }
    
    this.cambiarPaso(3);
  }

  // Métodos del Paso 3
  toggleZona(zona: string, event: any) {
    if (event.target.checked) {
      this.datosHogar.zonas.push(zona);
    } else {
      this.datosHogar.zonas = this.datosHogar.zonas.filter(z => z !== zona);
    }
  }

  isZonaSeleccionada(zona: string): boolean {
    return this.datosHogar.zonas.includes(zona);
  }

  finalizarConfiguracion() {
    this.mensajeErrorZonas = '';
    
    if (this.datosHogar.zonas.length === 0) {
      this.mensajeErrorZonas = 'Debes seleccionar al menos una zona para tu hogar.';
      return;
    }

    this.cargando = true;
    console.log('Payload consolidado listo para Base de Datos:', this.datosHogar);
    
    // Simulación de guardado exitoso y redirección
    setTimeout(() => {
      this.cargando = false;
      alert('Configuración guardada. ¡Bienvenido a hogar360!');
      // Aquí más adelante conectarás tu Router para enviarlo al dashboard
    }, 1500);
  }

  // Utilidad
  cambiarPaso(nuevoPaso: number) {
    this.pasoActual = nuevoPaso;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}