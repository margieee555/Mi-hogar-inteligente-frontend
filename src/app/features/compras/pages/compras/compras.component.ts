import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss'
})
export class ComprasComponent {
  nuevoProductoRapido: string = '';

  // Base de datos simulada y estructurada por categorías
  categorias = [
    {
      nombre: 'Alimentos',
      icono: 'restaurant',
      colorTexto: 'text-orange-600',
      items: [
        { id: 1, nombre: 'Pan Integral', cantidad: 2, comprado: false },
        { id: 2, nombre: 'Manzanas', cantidad: 1, comprado: false },
        { id: 3, nombre: 'Queso Fresco', cantidad: 1, comprado: true }
      ]
    },
    {
      nombre: 'Aseo',
      icono: 'cleaning_services',
      colorTexto: 'text-green-600',
      items: [
        { id: 4, nombre: 'Papel Higiénico', cantidad: 1, comprado: false }
      ]
    }
  ];

  // Métodos de interacción
  agregarProductoRapido() {
    const texto = this.nuevoProductoRapido.trim();
    if (texto) {
      console.log("Conectando a BD para agregar producto:", texto);
      // Por defecto, lo agregamos a la primera categoría (Alimentos) en la parte superior
      this.categorias[0].items.unshift({
        id: Date.now(),
        nombre: texto,
        cantidad: 1,
        comprado: false
      });
      this.nuevoProductoRapido = ''; // Limpia el input
    }
  }

  toggleComprado(item: any) {
    item.comprado = !item.comprado;
    const estado = item.comprado ? 'comprado' : 'desmarcado';
    console.log(`Producto '${item.nombre}' marcado como ${estado} en BD`);
  }

  incrementar(item: any) {
    item.cantidad++;
  }

  decrementar(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  }

  eliminarProducto(categoriaIndex: number, itemIndex: number) {
    console.log("Eliminando registro de la BD...");
    this.categorias[categoriaIndex].items.splice(itemIndex, 1);
  }

  compartirLista() {
    alert('Generando enlace para compartir tu lista de compras...');
  }

  abrirModalAgregar() {
    alert('Abriendo formulario avanzado para registrar producto a la lista...');
  }
}