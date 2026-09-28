import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finanzas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './finanzas.component.html',
  styleUrl: './finanzas.component.scss'
})
export class FinanzasComponent {
  // Balance general
  balanceTotal = 4250.00;
  totalIngresos = 5800.00;
  totalGastos = 1550.00;

  // Datos dinámicos para las tarjetas
  categorias = [
    { nombre: 'Hogar', icono: 'home', colorBarra: 'bg-blue-600', porcentaje: '45%', monto: 700 },
    { nombre: 'Comida', icono: 'restaurant', colorBarra: 'bg-orange-500', porcentaje: '30%', monto: 450 },
    { nombre: 'Ocio', icono: 'sports_esports', colorBarra: 'bg-purple-500', porcentaje: '15%', monto: 250 },
    { nombre: 'Salud', icono: 'medical_services', colorBarra: 'bg-red-500', porcentaje: '10%', monto: 150 }
  ];

  metas = [
    { nombre: 'Fondo de emergencia', porcentaje: 65, progresoStr: '65%', actual: 3250, objetivo: 5000, colorFondo: 'bg-green-500', colorTexto: 'text-green-600' },
    { nombre: 'Vacaciones', porcentaje: 30, progresoStr: '30%', actual: 600, objetivo: 2000, colorFondo: 'bg-blue-500', colorTexto: 'text-blue-600' }
  ];

  transacciones = [
    { id: 1, titulo: 'Supermercado', subtitulo: 'Comida • Hoy', monto: '-$120.50', icono: 'restaurant', colorFondoIcono: 'bg-orange-50', colorIcono: 'text-orange-600', colorMonto: 'text-gray-900' },
    { id: 2, titulo: 'Transferencia recibida', subtitulo: 'Ingreso • Ayer', monto: '+$850.00', icono: 'payments', colorFondoIcono: 'bg-green-50', colorIcono: 'text-green-600', colorMonto: 'text-green-600' },
    { id: 3, titulo: 'Mantenimiento', subtitulo: 'Hogar • 12 Oct', monto: '-$200.00', icono: 'home', colorFondoIcono: 'bg-blue-50', colorIcono: 'text-blue-600', colorMonto: 'text-gray-900' }
  ];

  // Métodos de interacción
  descargarReporte() {
    alert('Descargando reporte financiero...');
  }

  verDetalleCategoria() {
    console.log('Navegando al detalle de categorías...');
  }

  verTodasTransacciones() {
    console.log('Cargando historial completo de transacciones...');
  }

  verDetalleTransaccion(idTransaccion: number) {
    console.log(`Clic en la transacción número ${idTransaccion}`);
  }

  abrirRegistroTransaccion() {
    console.log('Botón de registro rápido presionado');
    alert('Función para registrar nuevo ingreso o gasto próximamente.');
  }
}