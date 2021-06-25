import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { CitasComponent } from './pages/citas/citas.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NewMedicosComponent } from './pages/new-medicos/new-medicos.component';
import { ProgramacionCitasComponent } from './pages/programacion-citas/programacion-citas.component';
import { HistoryCitasComponent } from './pages/history-citas/history-citas.component';
import { HomePacienteComponent } from './pages/home-paciente/home-paciente.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ReporteCitasComponent } from './pages/reporte-citas/reporte-citas.component';

@NgModule({
  declarations: [
    HomeComponent,
    MedicosComponent,
    PacientesComponent,
    EspecialidadesComponent,
    CitasComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    NewMedicosComponent,
    ProgramacionCitasComponent,
    HistoryCitasComponent,
    HomePacienteComponent,
    UsuariosComponent,
    ReporteCitasComponent,
  ],
  imports: [CommonModule,DashboardRoutingModule,NgxPaginationModule,FormsModule,FilterPipeModule,ReactiveFormsModule,DataTablesModule]
})
export class DashboardModule {}
