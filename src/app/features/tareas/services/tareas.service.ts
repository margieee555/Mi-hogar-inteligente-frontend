import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Tarea } from '../models/tarea.model';
import { CreateTareaRequest } from '../models/create-tarea-request.model';

/**
 * Único punto de contacto con los endpoints /api/v1/tareas/** del backend.
 * Los componentes nunca llaman HttpClient directamente.
 */
@Injectable({ providedIn: 'root' })
export class TareasService {

  private readonly baseUrl = `${environment.apiUrl}/api/v1/tareas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl);
  }

  create(request: CreateTareaRequest): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl, request);
  }

  complete(id: number): Observable<Tarea> {
    return this.http.patch<Tarea>(`${this.baseUrl}/${id}/completar`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}