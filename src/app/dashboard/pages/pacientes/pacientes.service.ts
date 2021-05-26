import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http:HttpClient) { }

  getPacientes():Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8050/api/pacientes');
  }
}
