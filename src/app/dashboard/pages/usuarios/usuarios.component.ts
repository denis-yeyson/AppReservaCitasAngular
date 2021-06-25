import { Component, OnInit} from '@angular/core';
import { UsuarioJson } from './usuarios.interface';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  usuarioJsonMedicos:UsuarioJson[]=[];
  usuarioJsonPacientes:UsuarioJson[]=[];
  userMedicosActivos:UsuarioJson[]=[];
  userMedicosDesactivos:UsuarioJson[]=[];
  userPacientesActivos:UsuarioJson[]=[];
  userPacientesDesactivos:UsuarioJson[]=[];

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuariosMedicos();

    this.cargarUsuariosPacientes();

  }

  cargarUsuariosMedicos(){
    this.usuariosService.getUsuariosMedicos().subscribe(usuarioJsonMedicos=>(usuarioJsonMedicos.forEach(element => {
      if(element.estado===1){
        this.userMedicosActivos.push(element);
      }else{
        this.userMedicosDesactivos.push(element);
      }
    })));
  }

  cargarUsuariosPacientes(){
    this.usuariosService.getUsuariosPacientes().subscribe(usuarioJsonPacientes=>(usuarioJsonPacientes.forEach(element => {
      if(element.estado===1){
        this.userPacientesActivos.push(element);
        //console.log(element.estado+'-'+element.id_usuario);
      }else{
        //console.log(element.estado+'-'+element.id_usuario);
        this.userPacientesDesactivos.push(element);
      }
    })));
  }

  activarUsuario(id:number){
    this.usuariosService.activarUsuario(id).subscribe(resp=>{console.log(resp)});
  }

  desactivarUsuario(id:number){
    this.usuariosService.desactivarUsuario(id).subscribe(resp=>{console.log(resp)});
  }

}
