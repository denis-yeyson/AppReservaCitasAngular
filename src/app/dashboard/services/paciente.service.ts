import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
 private url: string = 'http://localhost:8050/api/pacientes';
  constructor(private http:HttpClient) { }

  getPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url)
  }
}
