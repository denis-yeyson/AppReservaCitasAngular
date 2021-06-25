import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseJson } from 'src/app/auth/interfaces/interfaces';
import { environment } from 'src/environments/environment.prod';
import { FormMedico } from './form_medico.interface';

@Injectable({
  providedIn: 'root',
})
export class NewMedicosService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  registrarPaciente(
    apellido: string,
    colegiatura: number,
    correo: string,
    direccion: string,
    dni: number,
    fechaNacimiento: string,
    idEspecialidad: number,
    nombre: string,
    password: string,
    telefono: string,
    usuario: string
  ) {
    const url = `${this.baseUrl}/medicos/guardarMedico`;
    const body = {
      apellido,
      colegiatura,
      correo,
      direccion,
      dni,
      fechaNacimiento,
      idEspecialidad,
      nombre,
      password,
      telefono,
      usuario
    };
    return this.http.post<ResponseJson>(url, body);
  }
}
