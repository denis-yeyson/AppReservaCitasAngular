import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { InicioComponent } from './shared/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {path:'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'dashboard', loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }