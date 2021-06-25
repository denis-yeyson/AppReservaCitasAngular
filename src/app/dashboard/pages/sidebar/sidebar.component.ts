import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get usuario(){
    return this.authService.usuario;
  }

  get rol(){
    return this.authService.role;
  }
  tipo:number=parseInt(localStorage.getItem('tipo_usuario'));

  principal:boolean=true;
  listar_medicos:boolean=(this.tipo===1)?true:false;
  nuevo_medico:boolean=(this.tipo===1)?true:false;
  listar_pacientes:boolean=(this.tipo===1 || this.tipo===2)?true:false;
  agendar_citas:boolean=true;
  programar_citas:boolean=(this.tipo===1)?true:false;
  reporte_citas:boolean=(this.tipo===1 || this.tipo===2)?true:false;
  historial_citas:boolean=true;
  usuarios_link:boolean=(this.tipo===1)?true:false;
  especialidades:boolean=(this.tipo===1)?true:false;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }


  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

}
