import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adopcion } from '../../models/adopcion.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdopcionService {
  private apiUrl = 'http://localhost:8080/adopcion'; 

  constructor( private http: HttpClient) { }

  getAdopciones(): Observable<Adopcion[]> {
    return this.http.get<Adopcion[]>(this.apiUrl);
  }
  crear(adopcion: Adopcion): Observable<Adopcion> {
    return this.http.post<Adopcion>(this.apiUrl, adopcion);
  }
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  actualizar(id: number, adopcion: Adopcion): Observable<Adopcion> {
    return this.http.put<Adopcion>(`${this.apiUrl}/${adopcion.id}`, adopcion);
  }
}
