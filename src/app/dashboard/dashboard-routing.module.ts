import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { CitasComponent } from './pages/citas/citas.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { NewMedicosComponent } from './pages/new-medicos/new-medicos.component';
import { ProgramacionCitasComponent } from './pages/programacion-citas/programacion-citas.component';
import { HistoryCitasComponent } from './pages/history-citas/history-citas.component';
import { AdminGuard } from '../guards/admin.guard';
import { ValidarPacienteStorageGuard } from '../guards/validar-paciente-storage.guard';
import { ReporteCitasComponent } from './pages/reporte-citas/reporte-citas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MedicGuard } from '../guards/medic.guard';

 const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home',component: HomeComponent },
      { path: 'medicos',canActivate:[AdminGuard],component: MedicosComponent },
      { path: 'new_medicos',canActivate:[AdminGuard], component: NewMedicosComponent },
      { path: 'programacion_citas',canActivate:[AdminGuard],component: ProgramacionCitasComponent },
      { path: 'historial_citas',component: HistoryCitasComponent },
      { path: 'reporte_citas',canActivate:[MedicGuard],component: ReporteCitasComponent },
      { path: 'usuarios',canActivate:[AdminGuard],component: UsuariosComponent },
      { path: 'pacientes',canActivate:[MedicGuard],component: PacientesComponent },
      { path: 'citas',component: CitasComponent },
      { path: 'especialidades',canActivate:[AdminGuard],component: EspecialidadesComponent },
      { path: '**', redirectTo:'home'},
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
