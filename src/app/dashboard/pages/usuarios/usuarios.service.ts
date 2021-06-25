import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioJson } from './usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getUsuariosMedicos():Observable<UsuarioJson[]>{
    return this.http.get<UsuarioJson[]>(`${this.baseUrl}/usuarios/obternerUsuariosMedicos`);
  }

  getUsuariosPacientes():Observable<UsuarioJson[]>{
    return this.http.get<UsuarioJson[]>(`${this.baseUrl}/usuarios/obternerUsuariosPacientes`);
  }

  activarUsuario(id:number){
    const url = `${this.baseUrl}/usuarios/activarUsuario`;
    const body={id};
    return this.http.post<any>(url,body);
  }

  desactivarUsuario(id:number){
    const url = `${this.baseUrl}/usuarios/desactivarUsuario`;
    const body={id};
    return this.http.post<any>(url,body);
  }
}
