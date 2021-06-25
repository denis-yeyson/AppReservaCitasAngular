import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from '../citas/citas.service';
import { ProgramacionHoras } from '../citas/interfaces/fecha_disponibles.interface';
import { Medico, MedicoJson } from '../medicos/medico.interface';
import { MedicosService } from '../medicos/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programacion-citas',
  templateUrl: './programacion-citas.component.html'
})
export class ProgramacionCitasComponent implements OnInit {
  formProgramacionCita: FormGroup= this.fb.group({
    medico: ['pedi', [Validators.required]],
    fecha: ['23/03/2020', [Validators.required]],
  });

  medicosJson:MedicoJson[]=[];
  medico:MedicoJson;
  _horas:ProgramacionHoras[];

  constructor(private fb: FormBuilder, private router: Router,private medicoService:MedicosService,private citasService:CitasService) { }

  ngOnInit(): void {
    this.getHoras();
  }

  registrarProgramacionCita(){
    let usuarioId = parseInt(localStorage.getItem('id_usuario'));
    let medicoId = this.medico.id_medico;
    const {fecha} = this.formProgramacionCita.value;
    this._horas.forEach(horas => {
      if(horas.isSelected===true){
        this.citasService.registroProgramacionCita(medicoId,usuarioId,fecha,horas.horaInicio,horas.horaFin).subscribe(resp=>{console.log(resp)});
      }
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Reserva correcta de Programación de citas',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('dashboard/home');
  }

  listarMedicos(){
    const {medico} = this.formProgramacionCita.value;
    this.medicoService.getConsultaMedicos(medico).subscribe(
      resp=>{this.medicosJson=resp});
  };

  seleccionarMedico(medicoSeleccionado:MedicoJson){
      this.medico=medicoSeleccionado;
      this.formProgramacionCita.patchValue({medico: `${this.medico.apellidos} ${this.medico.apellidos}`});
  }
  getHoras(){
    this._horas=[
      {orden:0,horaInicio: "8:00",horaFin: "8:30",isSelected:false},
      {orden:1,horaInicio: "8:30",horaFin: "9:00",isSelected:false},
      {orden:2,horaInicio: "9:00",horaFin: "9:30",isSelected:false},
      {orden:3,horaInicio: "9:30",horaFin:"10:00",isSelected:false},
      {orden:4,horaInicio:"10:00",horaFin:"10:30",isSelected:false},
      {orden:5,horaInicio:"10:30",horaFin:"11:00",isSelected:false},
      {orden:6,horaInicio:"11:00",horaFin:"11:30",isSelected:false},
      {orden:7,horaInicio:"11:30",horaFin:"12:00",isSelected:false},
      {orden:8,horaInicio:"12:00",horaFin:"12:30",isSelected:false},
      {orden:9,horaInicio:"12:30",horaFin:"13:00",isSelected:false},
      {orden:10,horaInicio:"13:00",horaFin:"13:30",isSelected:false},
      {orden:11,horaInicio:"13:30",horaFin:"14:00",isSelected:false},
      {orden:12,horaInicio:"14:00",horaFin:"14:30",isSelected:false},
      {orden:13,horaInicio:"14:30",horaFin:"15:00",isSelected:false},
      {orden:14,horaInicio:"15:00",horaFin:"15:30",isSelected:false},
      {orden:15,horaInicio:"15:30",horaFin:"16:00",isSelected:false},
      {orden:16,horaInicio:"16:00",horaFin:"16:30",isSelected:false},
      {orden:17,horaInicio:"16:30",horaFin:"17:00",isSelected:false},
      {orden:18,horaInicio:"17:00",horaFin:"17:30",isSelected:false},
      {orden:19,horaInicio:"17:30",horaFin:"18:00",isSelected:false}
    ];
  }

  onchange(orden:number){
    let estado=this._horas[orden].isSelected;
    this._horas[orden].isSelected=(estado===true)?false:true;
  }

  otros(){};

}
