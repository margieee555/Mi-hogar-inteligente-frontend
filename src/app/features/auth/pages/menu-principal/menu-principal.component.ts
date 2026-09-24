import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.scss'
})
export class MenuPrincipalComponent implements OnInit {
  // Estado de modales
  modalActivo: string | null = null;

  // Variables para la fecha actual
  mesActualStr: string = '';
  diaActualStr: string = '';
  diaSeleccionado: string = '2026-09-13';

  // Datos de pagos simulados
  serviciosPagos = [
    { id: 1, nombre: "Agua", icono: "water_drop", monto: 45.50, fecha: "15 Oct", estado: "pendiente", colorIcono: "bg-red-50 text-red-600", colorBorde: "border-red-500", colorBadge: "bg-red-50 text-red-600" },
    { id: 2, nombre: "Luz", icono: "bolt", monto: 82.30, fecha: "18 Oct", estado: "pendiente", colorIcono: "bg-orange-50 text-orange-500", colorBorde: "border-orange-400", colorBadge: "bg-orange-50 text-orange-600" },
    { id: 3, nombre: "Internet", icono: "wifi", monto: 59.99, fecha: "01 Oct", estado: "pagado", colorIcono: "bg-green-50 text-green-600", colorBorde: "border-green-500", colorBadge: "bg-green-50 text-green-600" },
    { id: 4, nombre: "Arriendo", icono: "home_work", monto: 1200.00, fecha: "05 Oct", estado: "pagado", colorIcono: "bg-green-50 text-green-600", colorBorde: "border-green-500", colorBadge: "bg-green-50 text-green-600" }
  ];

  // Modelos de datos para los formularios
  nuevaTarea = { nombre: '', categoria: 'limpieza', fecha: '', hora: '', prioridad: 'media', asignadoA: '' };
  nuevoGasto = { monto: null, categoria: 'otros', fecha: '', descripcion: '', recibo: null };
  nuevoMiembro = { nombre: '', avatar: 'face', permiso: 'admin', notas: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.configurarFechas();
  }

  configurarFechas() {
    const today = new Date();
    const optionsMonth: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    const optionsDay: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    
    let monthStr = today.toLocaleDateString('es-ES', optionsMonth);
    this.mesActualStr = monthStr.charAt(0).toUpperCase() + monthStr.slice(1);

    let dayStr = today.toLocaleDateString('es-ES', optionsDay);
    this.diaActualStr = dayStr.charAt(0).toUpperCase() + dayStr.slice(1);
  }

  // Lógica de Modales
  abrirModal(modalId: string) {
    this.modalActivo = modalId;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalActivo = null;
    document.body.style.overflow = '';
  }

  // Lógica de Pagos
  procesarPago(idServicio: number) {
    const servicio = this.serviciosPagos.find(s => s.id === idServicio);
    if (servicio && servicio.estado === "pendiente") {
        servicio.estado = "pagado";
        servicio.colorIcono = "bg-green-50 text-green-600";
        servicio.colorBorde = "border-green-500";
        servicio.colorBadge = "bg-green-50 text-green-600";
    }
  }

  // Lógica del Calendario
  sincronizarCalendario() {
    alert("Conectando y sincronizando eventos con Google Calendar...");
  }

  seleccionarDia(fecha: string) {
    this.diaSeleccionado = fecha;
  }

  // Lógica de Formularios
  guardarTarea() {
    console.log("Guardando en Mi Hogar 360 -> Tarea:", this.nuevaTarea);
    alert("¡Tarea creada con éxito en Mi Hogar 360!");
    this.cerrarModal();
  }

  guardarGasto() {
    console.log("Guardando en Mi Hogar 360 -> Gasto:", this.nuevoGasto);
    alert("¡Gasto guardado correctamente en Mi Hogar 360!");
    this.cerrarModal();
  }

  guardarMiembro() {
    console.log("Guardando en Mi Hogar 360 -> Miembro:", this.nuevoMiembro);
    alert("¡Miembro invitado con éxito a Mi Hogar 360!");
    this.cerrarModal();
  }

  irAlPerfil() {
    this.router.navigate(['/perfil']);
  }
}