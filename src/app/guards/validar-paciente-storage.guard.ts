import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarPacienteStorageGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService, private router:Router){}

  canActivate():Observable<boolean> | boolean {
    return this.authService.validarSesion().pipe(
      tap(valid=>{if(!valid){
        this.router.navigateByUrl('/auth/login');
      }})
    );
  }
  canLoad():Observable<boolean> |boolean {
    return this.authService.validarSesion().pipe(
      tap(valid=>{if(!valid){
        this.router.navigateByUrl('/auth/login');
      }})
    );
  }
}
