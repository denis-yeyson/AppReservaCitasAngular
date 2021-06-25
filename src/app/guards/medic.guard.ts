import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    if(this.authService.role==='MEDICOS_ROL' || this.authService.role==='ADMIN_ROL'){
      return true;
    }else{
      this.router.navigateByUrl('dashboard/home');
      return false;
    }
  }

}
