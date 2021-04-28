import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './pages/citas/citas.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,
    children: [
      { path: 'principal', component: PrincipalComponent },
      { path: 'medicos', component: MedicosComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'especialidades', component: EspecialidadesComponent },
      { path: '**', redirectTo: 'principal' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
