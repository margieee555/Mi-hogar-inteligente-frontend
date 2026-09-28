export interface Tarea {
  id: number;
  titulo: string;
  descripcion?: string;
  completada: boolean;
  asignadoA: string;
  fechaVencimiento?: string;
  esRecurrente: boolean;
  hogarId: number;
}