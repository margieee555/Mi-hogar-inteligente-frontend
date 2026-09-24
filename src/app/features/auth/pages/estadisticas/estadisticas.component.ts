import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  
  // Control de pestañas de periodo
  periodoActual: 'mensual' | 'trimestral' | 'anual' = 'mensual';

  // Base de datos simulada para la gráfica de barras
  datosComparativo = [
    { mes: 'Septiembre', gastoAlto: '80%', ahorroAlto: '50%', gastoVal: '$2,400', ahorroVal: '$1,500' },
    { mes: 'Octubre', gastoAlto: '90%', ahorroAlto: '60%', gastoVal: '$2,700', ahorroVal: '$1,800' },
    { mes: 'Noviembre', gastoAlto: '75%', ahorroAlto: '85%', gastoVal: '$2,250', ahorroVal: '$2,550' }
  ];

  cambiarPeriodo(periodo: 'mensual' | 'trimestral' | 'anual') {
    this.periodoActual = periodo;
    console.log(`Periodo seleccionado en Mi Hogar 360: ${periodo}`);
  }

  exportarPDF() {
    alert('Generando reporte en PDF para Mi Hogar 360...');
  }
}