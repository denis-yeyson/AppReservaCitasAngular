import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    if(this.authService.role==='ADMIN_ROL'){
      return true;
    }else{
      this.router.navigateByUrl('dashboard/home');
      return false;
    }
  }
}
