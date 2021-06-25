import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    username: ['admin', [Validators.required]],
    password: ['1234', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder, private router: Router,private auth:AuthService) {}

  ngOnInit(): void {}

  login() {
    const {username,password} = this.miFormulario.value;
    this.auth.login(username,password).subscribe(resp=>{
      if(resp===true){
        this.router.navigateByUrl('dashboard/home');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'Usuario ó contraseña incorrrecto!'
        })
      }
    });
  }
}
