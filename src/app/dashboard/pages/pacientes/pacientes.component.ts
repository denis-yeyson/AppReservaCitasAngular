import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente.interface';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {

  pacientes:Paciente[]=[];
  paginaActual:number = 1;
  paciente:any ={idPaciente:'',nombres:'',apellidos:''};
  constructor( private pacientesService: PacientesService) { }

  ngOnInit(): void {

    this.pacientesService.getPacientes()
    .subscribe(pacientes=>this.pacientes=pacientes)
  }

  buscar(){

  }

}
