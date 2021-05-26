import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get paciente(){
    return this.authService.paciente;
  }

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }


  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

}
