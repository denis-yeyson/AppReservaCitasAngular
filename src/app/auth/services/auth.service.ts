import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Paciente,
  UsuarioJson,
} from 'src/app/dashboard/pages/pacientes/paciente.interface';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { PacienteForm, ResponseJson } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario: UsuarioJson;
  private _paciente: Paciente;

  get paciente() {
    return { ...this._paciente };
  }

  get usuario() {
    return { ...this._usuario };
  }

  get role(): 'ADMIN_ROL' | 'MEDICOS_ROL' | 'PACIENTE_ROL' {
    let v = parseInt(localStorage.getItem('tipo_usuario'));
    switch (v) {
      case 1: {
        return 'ADMIN_ROL';
        break;
      }
      case 2: {
        return 'MEDICOS_ROL';
        break;
      }
      default: {
        return 'PACIENTE_ROL';
        break;
      }
    }
  }

  constructor(private http: HttpClient,private router: Router) {}

  login(username: string, password: String) {
    const url = `${this.baseUrl}/pacientes/login`;
    const body = { username, password };
    return this.http.post<UsuarioJson>(url, body).pipe(
      tap((resp) => {
        if (resp.idUsuario > -1) {
          localStorage.setItem('id_usuario', resp.idUsuario.toString());
          localStorage.setItem('tipo_usuario', resp.tipoUsuario.toString());
          this._usuario = {
            tipoUsuario: resp.tipoUsuario,
            idUsuario: resp.idUsuario,
            nombres: resp.nombres,
            apellidos: resp.apellidos,
          };
        }
      }),
      map((resp) => (resp.idUsuario > -1 ? true : false)),
      catchError((err) => of(false))
    );
  }

  registrarPaciente(
    apellidos: string,
    clave: string,
    correo: string,
    direccion: string,
    dni: string,
    estado_civil: string,
    fecha_nacimiento: Date,
    id_distrito: number,
    nombre_usuario: string,
    nombres: string,
    sexo: string,
    telefono: string
  ) {
    const url = `${this.baseUrl}/pacientes`;
    const body = {
      apellidos,
      clave,
      correo,
      direccion,
      dni,
      estado_civil,
      fecha_nacimiento,
      id_distrito,
      nombre_usuario,
      nombres,
      sexo,
      telefono,
    };
    return this.http.post<ResponseJson>(url, body);
  }

  validarSesion(): Observable<boolean> {
    const headers = new HttpHeaders().set('id_usuario',
      localStorage.getItem('id_usuario') || ''
    );
    const url = `${
      this.baseUrl
    }/usuarios/validarIdUsuario/${localStorage.getItem('id_usuario')}`;
    return this.http.get<UsuarioJson>(url, { headers }).pipe(
      map((resp) => {
        localStorage.setItem('id_usuario', resp.idUsuario.toString());
        localStorage.setItem('tipo_usuario', resp.tipoUsuario.toString());
        this._usuario = {
          tipoUsuario: resp.tipoUsuario,
          idUsuario: resp.idUsuario,
          nombres: resp.nombres,
          apellidos: resp.apellidos,
        };
        return true;
      }),
      catchError((err) => of(false))
    );
  }

  validarAdmin():boolean{
    if(this.role==='ADMIN_ROL'){
      //this.router.navigateByUrl('dashboard/home');
      return true;
    }else{
      //this.router.navigateByUrl('dashboard');
      return false;
    }
  }

  logout() {
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('tipo_usuario');
  }
}
