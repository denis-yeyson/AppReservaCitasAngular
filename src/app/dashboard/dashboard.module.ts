import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { CitasComponent } from './pages/citas/citas.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    MedicosComponent,
    PacientesComponent,
    CitasComponent,
    EspecialidadesComponent,
    HeaderComponent,
    PrincipalComponent,
    SidebarComponent
  ],
  imports: [
    DashboardRoutingModule
  ],

})
export class DashboardModule { }
