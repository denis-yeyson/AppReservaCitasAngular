import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formSavePaciente: FormGroup= this.fb.group({
    apellidos: ['espinoza', [Validators.required]],
    clave: ['espinoza', [Validators.required]],
    correo: ['espinoza@gmail.com', [Validators.required]],
    direccion: ['ninguna', [Validators.required]],
    dni: ['34567890', [Validators.required]],
    estado_civil: ['soltero', [Validators.required]],
    fecha_nacimiento: ['1997-02-26',[Validators.required]],
    id_distrito: ['150106', [Validators.required]],
    nombre_usuario: ['denis', [Validators.required]],
    nombres: ['espinoza', [Validators.required]],
    sexo: ['Masculino', [Validators.required]],
    telefono:['345676', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
  }

  registrar() {
    const {
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
      telefono
    } = this.formSavePaciente.value;
    this.auth.registrarPaciente(  apellidos,
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
      telefono).subscribe(resp=>{
      if(resp.valor===1){
        this.router.navigateByUrl('/auth/login');
      }else if(resp.valor===-1 || resp.valor===-0){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: resp.mensaje
        })
      }
    });
  }

}
