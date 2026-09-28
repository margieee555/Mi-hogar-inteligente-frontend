import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {
  // Estado para los filtros y búsqueda
  filtroActual: string = 'todos';
  textoBusqueda: string = '';

  // Lista de categorías para los botones
  categorias = [
    { nombre: 'Todos', valor: 'todos' },
    { nombre: 'Alimentos', valor: 'alimentos' },
    { nombre: 'Aseo', valor: 'aseo' },
    { nombre: 'Medicamentos', valor: 'medicamentos' },
    { nombre: 'Herramientas', valor: 'herramientas' }
  ];

  // Base de datos simulada del inventario
  productos = [
    {
      id: 1,
      nombre: 'Leche Entera',
      categoria: 'alimentos',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTo4FoCnuo4E2tF2GPxA6TGJqE_-IB3gBOVZEecHaS6Tkl8_Rmdps1NlVhG3uGpk9cKAg9lDQ5_SCs6EvTlJ7SrEsrtnakg8dMdvLUwOKCNSL-NfkHUk0fETHOik_wHmjkhQr8VBXjU9a02tT76wYnpNbLyfewYOSDL5X75tkECCB-tDTR9Shuy09ySvSm-pPgw9aQkL75ASFm-g9cGZ00d_a-JvGUj9WQOlMZw43HyPHQ7plMHyX_gw',
      infoIcono: 'schedule',
      infoTexto: 'Vence: 12 Oct',
      infoColor: 'text-orange-600',
      stockStr: '2L',
      porcentaje: 25,
      colorBarra: 'bg-orange-500',
      colorTextoPorcentaje: 'text-orange-600'
    },
    {
      id: 2,
      nombre: 'Detergente Ropa',
      categoria: 'aseo',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoLnoSMEOauJvIAQ28kqR-ezXktsvY5dYvMeS0KrZR4rJTmz_R9VdVjHkltIAGKJwlwz7lVBtKGUoS3kUCkWcMxljp-v0IVZRYMG842N5Xc9EmeGzYNWIqiJhBcEoemfqxpGLbY7sWrMKaPvVkKT94DSTed-t0Di6rFfb8FzcrBOsBBjg7W_966_mTiO0vrBnSWwuZLvVs3fjmsUAYIfNY_MRLjJnkYR5IbnhpOocwwyhXEOMvLiYIsw',
      infoIcono: 'inventory_2',
      infoTexto: 'Aseo',
      infoColor: 'text-gray-500',
      stockStr: '1.5L',
      porcentaje: 70,
      colorBarra: 'bg-green-500',
      colorTextoPorcentaje: 'text-green-600'
    },
    {
      id: 3,
      nombre: 'Paracetamol 500mg',
      categoria: 'medicamentos',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCebQw_53yQfohRnRwKDwFbpSSuVtL2CagXBb3dSvtJIUyIVV4Un-p_TDDMnaKUJTeFerNkG8ccDR7cT0u5MeP2g7-2q6BBUItRtkUrNVWkAdgCsI7bC7ECUGjQT-1kIv6LZbnaeGJO5DkRagl1Bme_mFLcSU27XvafGYlE2vjvgqjSJ76SoYxMid1Sy6bhPaT9ymVuDAp-_QqJiGEf0UZLyuagY67A6qyYh-SWJtJPIy1_2vZhVLCzfQ',
      infoIcono: 'schedule',
      infoTexto: 'Vence: 05 Nov',
      infoColor: 'text-yellow-600',
      stockStr: '12 u.',
      porcentaje: 40,
      colorBarra: 'bg-yellow-500',
      colorTextoPorcentaje: 'text-yellow-600'
    }
  ];

  // Getter para retornar los productos filtrados en tiempo real
  get productosFiltrados() {
    return this.productos.filter(p => {
      const coincideCategoria = this.filtroActual === 'todos' || p.categoria === this.filtroActual;
      const coincideTexto = p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      return coincideCategoria && coincideTexto;
    });
  }

  // Métodos de interacción
  setFiltro(categoria: string) {
    this.filtroActual = categoria;
  }

  verAlertas() {
    console.log('Navegando a los productos por vencer...');
  }

  opcionesProducto(id: number) {
    console.log(`Abriendo menú de opciones para el producto con ID: ${id}`);
  }

  agregarProducto() {
    console.log('Conectando con base de datos para registrar un nuevo producto en el inventario...');
    alert('Función para agregar nuevo producto próximamente.');
  }
}