import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad } from '../especialidades/especialidad.interface';
import { EspecialidadesService } from '../especialidades/especialidades.service';
import { MedicosService } from '../medicos/medicos.service';
import { NewMedicosService } from './new-medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-medicos',
  templateUrl: './new-medicos.component.html',
  styleUrls: ['./new-medicos.component.scss']
})
export class NewMedicosComponent implements OnInit {

  formNewMedico:FormGroup=this.fb.group({
    apellido:['esoinoza',[Validators.required]],
    nombre:['leonard',[Validators.required]],
    correo:['leo20ing@gmail.com',[Validators.required]],
    direccion:['Lima',[Validators.required]],
    dni:['54656776',[Validators.required]],
    fechaNacimiento:['',[Validators.required]],
    idEspecialidad:[1,[Validators.required]],
    colegiatura:['3453',[Validators.required]],
    telefono:['34546',[Validators.required]],
    usuario:['leo20ing',[Validators.required]],
    password:['leo20ing',[Validators.required]],
    password2:['leo20ing',[Validators.required]],
  });

  especialidades: Especialidad[] = [];

  constructor(
    private especialidadesService: EspecialidadesService,
    private newMedicosService: NewMedicosService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const {} = this.formNewMedico.value;
    this.especialidadesService
      .getEspecialidades()
      .subscribe((especialidades) => (this.especialidades = especialidades));
  }

  registrar(){
    const {apellido,
      nombre,
      correo,
      direccion,
      dni,
      fechaNacimiento,
      idEspecialidad,
      colegiatura,
      telefono,
      usuario,
      password,password2}= this.formNewMedico.value;
      this.newMedicosService.registrarPaciente(apellido,
        colegiatura,
        correo,
        direccion,
        dni,
        fechaNacimiento,
        idEspecialidad,
        nombre,
        password,
        telefono,
        usuario).subscribe(resp=>{ if(resp.valor===1){
        this.router.navigateByUrl('/dashboard/medicos');
      }else if(resp.valor===-1 || resp.valor===-0){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: resp.mensaje
        })
      }});
  };

}
