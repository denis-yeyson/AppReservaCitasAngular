import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico, MedicoJson } from './medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }

  getMedicoEspecialidad(id_especialidad:number):Observable<Medico[]> {
    return this.http.get<Medico[]>(`http://localhost:8050/api/medicos/medico_especialidad/${id_especialidad}`);
  }

  getMedicos():Observable<Medico[]> {
    return this.http.get<Medico[]>(`http://localhost:8050/api/medicos`);
  }

  getMedicoId(id_medico:number):Observable<Medico> {
    return this.http.get<Medico>(`http://localhost:8050/api/medicos/${id_medico}`);
  }

  getConsultaMedicos(dato:string):Observable<MedicoJson[]> {
    return this.http.get<MedicoJson[]>(`http://localhost:8050/api/medicos/consulta_medicos/${dato}`);
  }
}
