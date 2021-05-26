import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from './especialidad.interface';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http:HttpClient) { }

  getEspecialidades():Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>('http://localhost:8050/api/especialidad');
  }
}
