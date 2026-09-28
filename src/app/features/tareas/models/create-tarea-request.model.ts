export interface CreateTareaRequest {
  titulo: string;
  descripcion?: string;
  asignadoA: string;
  fechaVencimiento?: string;
  esRecurrente: boolean;
}