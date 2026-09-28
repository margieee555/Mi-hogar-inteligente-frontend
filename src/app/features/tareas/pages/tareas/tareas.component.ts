import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent {
  // Estado del filtro superior
  filtroActual: 'pendiente' | 'proceso' | 'completado' = 'pendiente';

  // Base de datos de tareas
  baseDatosTareas = [
    {
      id: 1,
      titulo: "Limpiar cocina",
      estado: "pendiente",
      prioridad: "Alta",
      colorBorde: "border-red-500",
      badgeClase: "bg-red-50 text-red-600",
      iconoPrioridad: "priority_high",
      fecha: "Hoy, 18:00",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkVQqlqCzxVAWGEWYq_zDM2i1eqj-Incr8AjJKY2JgswZgXLp1obObqyffk6g9byBvpT1tCRhl8yemZ0owpKE8BVE0i4v76VnA_FjIdvagvxrYhu-D7jz35l43TqPhacx_iPyV_OQmp60c9CN9H7rS76WBseL_6EfV-VxCcr27JqdmlM4Fp4ua3PRA4RbeYZD0zg_iZ-2wC67Vd67HeKmShWIYO67uxPN8W-2Vr0N3Gt3Ae3JxRwggkw"
    },
    {
      id: 2,
      titulo: "Sacar basura",
      estado: "pendiente",
      prioridad: "Media",
      colorBorde: "border-orange-400",
      badgeClase: "bg-orange-50 text-orange-600",
      iconoPrioridad: "schedule",
      fecha: "Mañana, 08:00",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPJHSlPMSxvYZOd7pbFikpIN3j9Wph9trqIx16s_VhxKVGDVr6ZtRXhb1S24flFFJxlBLiYk-9txouXoWZkepnnDIbS2g_2WVIzXX688K2rlZLIE_z6ogiJJ6iBoPzYWpLOF3ATZnX8u0Z93gVmIF25KHZdg_rB9DoimVP6cO5__qrTUw5uduMLEg_xWp7EC1Ke1Dik4iQxr1_xhaZ3mAfDlbw5VNpQIEVSC2b9ezpkN4pX2GAq6kZww"
    },
    {
      id: 3,
      titulo: "Lavar ropa",
      estado: "proceso",
      prioridad: "Baja",
      colorBorde: "border-green-400",
      badgeClase: "bg-green-50 text-green-700",
      iconoPrioridad: "low_priority",
      fecha: "Viernes, 10:00",
      avatar: null
    }
  ];

  // Getter para retornar solo las tareas que coincidan con el filtro
  get tareasFiltradas() {
    return this.baseDatosTareas.filter(t => t.estado === this.filtroActual);
  }

  // Métodos de interacción
  filtrarTareas(estado: 'pendiente' | 'proceso' | 'completado') {
    this.filtroActual = estado;
  }

  cambiarEstado(tarea: any, nuevoEstado: string) {
    tarea.estado = nuevoEstado;
    
    // Actualización de estilos basada en el nuevo estado
    if (nuevoEstado === 'completado') {
      tarea.colorBorde = "border-green-600";
      tarea.badgeClase = "bg-green-50 text-green-600";
    } else if (nuevoEstado === 'proceso') {
      tarea.colorBorde = "border-blue-600";
      tarea.badgeClase = "bg-blue-50 text-blue-600";
    }
  }
}