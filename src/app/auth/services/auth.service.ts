import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Paciente } from 'src/app/dashboard/pages/pacientes/paciente.interface';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { PacienteForm, ResponseJson } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _paciente: Paciente;

  get paciente() {
    return { ...this._paciente };
  }

  constructor(private http: HttpClient) {}

  loginPaciente(username: string, password: String) {
    const url = `${this.baseUrl}/pacientes/loginPaciente`;
    const body = { username, password };
    return this.http.post<Paciente>(url, body).pipe(
      tap((resp) => {
        if (resp.idPaciente > -1) {
          localStorage.setItem('id_paciente',resp.idPaciente.toString());
          this._paciente = {
            idPaciente: resp.idPaciente,
            nombres: resp.nombres,
            apellidos: resp.apellidos,
            dni: resp.dni,
            telefono: resp.telefono,
            sexo: resp.sexo,
            correo: resp.correo,
            direccion: resp.correo,
            fechaRegistro: resp.fechaRegistro,
            fechaNacimiento: resp.fechaNacimiento,
            estadoCivil: resp.estadoCivil,
            fechaModificacion: resp.estadoCivil,
            estado: resp.estado,
            observacion: resp.observacion,
            idUsuario: resp.idUsuario,
            idUbigeo: resp.idUbigeo,
          };
        }
      }),
      map((resp) => (resp.idPaciente > -1 ? true : false)),
      catchError((err) => of(false))
    );
  }

  registrarPaciente(apellidos: string,clave: string,correo: string,direccion: string,
    dni: string,estado_civil: string,fecha_nacimiento: Date,id_distrito: number,nombre_usuario: string,
    nombres: string,sexo: string,telefono: string){
    const url = `${this.baseUrl}/pacientes`;
    const body = { apellidos,clave,correo,direccion,dni,estado_civil,fecha_nacimiento,id_distrito,nombre_usuario,nombres,sexo,telefono };
    return this.http.post<ResponseJson>(url, body);
  }

  validarSesion():Observable<boolean>{
    const headers = new HttpHeaders().set('paciente_id',localStorage.getItem('id_paciente')||'');
    const url=`${this.baseUrl}/pacientes/${localStorage.getItem('id_paciente')}`;
    return this.http.get<Paciente>(url,{headers})
    .pipe(
      map(resp=>{
        console.log(resp);
        localStorage.setItem('id_paciente',resp.idPaciente.toString());
          this._paciente = {
            idPaciente: resp.idPaciente,
            nombres: resp.nombres,
            apellidos: resp.apellidos,
            dni: resp.dni,
            telefono: resp.telefono,
            sexo: resp.sexo,
            correo: resp.correo,
            direccion: resp.correo,
            fechaRegistro: resp.fechaRegistro,
            fechaNacimiento: resp.fechaNacimiento,
            estadoCivil: resp.estadoCivil,
            fechaModificacion: resp.estadoCivil,
            estado: resp.estado,
            observacion: resp.observacion,
            idUsuario: resp.idUsuario,
            idUbigeo: resp.idUbigeo,
          };
        return true;
      }),
      catchError(err=>of(false))
    )
  }

  logout(){
    localStorage.removeItem('id_paciente');
  }

}
