import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../interfaces/paciente.interface';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[];
  constructor(private PacienteService:PacienteService) {}

  ngOnInit(): void {
    this.PacienteService.getPacientes().subscribe(pacientes=>this.pacientes=pacientes);
    //console.log('otros: '+ pacientes);
  }
}
