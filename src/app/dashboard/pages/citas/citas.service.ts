import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseJson } from 'src/app/auth/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { FechasDisponibles, HorasDisponibles, listaCitas } from './interfaces/fecha_disponibles.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getFechasDisponibles(id_medico:number):Observable<FechasDisponibles[]> {
    return this.http.get<FechasDisponibles[]>(`${this.baseUrl}/horarios/horario_medico_disponible/${id_medico}`);
  }

  getHorasDisponibles(id_medico:number,fecha:string):Observable<HorasDisponibles[]> {
    const body = { id_medico, fecha };
    return this.http.post<HorasDisponibles[]>(`${this.baseUrl}/horarios/horas_medico_disponible`,body);
  }

  registrarCita(idEspecialidad:number,idHorario:number,idMedico:number,idPaciente:number){
    const url = `${this.baseUrl}/citas/guardarCita`;
    const body = { idEspecialidad,idHorario,idMedico,idPaciente };
    return this.http.post<ResponseJson>(url, body);
  }

  registroProgramacionCita(id_medico: number,id_usuario_paciente: number,fecha: string,hora_inicio: string,hora_final: string){
    const url = `${this.baseUrl}/citas/programacion_cita`;
    const body = { id_medico,id_usuario_paciente,fecha,hora_inicio,hora_final };
    return this.http.post<ResponseJson>(url, body);
  }

  listaCitasReservadas(datos: string){
    const url = `${this.baseUrl}/citas/listar_citas/${datos}`;
    return this.http.get<listaCitas[]>(url);
  }
}
