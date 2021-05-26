import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Especialidad } from '../especialidades/especialidad.interface';
import { EspecialidadesService } from '../especialidades/especialidades.service';
import { Medico } from '../medicos/medico.interface';
import { MedicosService } from '../medicos/medicos.service';
import { CitasService } from './citas.service';
import { FechasDisponibles, HorasDisponibles } from './interfaces/fecha_disponibles.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
})
export class CitasComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    idEspecialidad:[1,[Validators.required]],
    idMedico:[1,[Validators.required]],
    idHorario:[1,[Validators.required]]
  });

  especialidades: Especialidad[] = [];
  especialidad: Especialidad;

  medicos: Medico[] = [];
  medico: Medico;

  fechasDisponibles: FechasDisponibles[]=[];
  horasDisponibles:HorasDisponibles[]=[];

  constructor(
    private especialidadesService: EspecialidadesService,
    private medicosService: MedicosService,
    private citasService:CitasService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const {} = this.miFormulario.value;
    this.especialidadesService
      .getEspecialidades()
      .subscribe((especialidades) => (this.especialidades = especialidades));

    this.medicosService
      .getMedicoEspecialidad(5)
      .subscribe((medicos) => (this.medicos = medicos));

      this.medicosService
      .getMedicos()
      .subscribe((medicos) => (this.medicos = medicos));
  }

  buscarMedicoEspecialidad(){
    const{idEspecialidad} = this.miFormulario.value;
    this.medicosService
      .getMedicoEspecialidad(idEspecialidad)
      .subscribe((medicos) => (this.medicos = medicos));
  }

  seleccionarMedico(id_medic:string){
    //this.miFormulario.patchValue({idMedico: id_medic});
    const{idMedico} = this.miFormulario.value;
    this.citasService.getFechasDisponibles(1)
    .subscribe(fechasDisponibles=>this.fechasDisponibles=fechasDisponibles);
  }

  mostrarHoras(fecha:string){
    const{idMedico} = this.miFormulario.value;
    this.citasService.getHorasDisponibles(idMedico,fecha)
    .subscribe(horasDisponibles=>this.horasDisponibles=horasDisponibles);
  }

  seleccionarHora(idHorarios:number){
    this.miFormulario.patchValue({idHorario: idHorarios});
    console.log(this.miFormulario.value);
    console.log('Id Paciente: '+localStorage.getItem('id_paciente'));
  }

  registrarCita(){
   const {idEspecialidad,idHorario,idMedico} = this.miFormulario.value;
    const idPaciente=localStorage.getItem('id_paciente');
    this.citasService.registrarCita(parseInt(idEspecialidad),parseInt(idHorario),parseInt(idMedico),parseInt(idPaciente))
    .subscribe(resp=>{
      if(resp.valor===1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cita reservada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('dashboard/home');
      }else {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: "No se reservo la cita"
        })
      }
    })
  }
}
