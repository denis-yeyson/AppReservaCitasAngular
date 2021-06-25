import { Component, OnDestroy,OnInit } from '@angular/core';
import { Paciente } from './paciente.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PacientesService } from './pacientes.service';
import { LanguageApp } from '../../interfaces/LanguageApp.interface';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
})
export class PacientesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pacientes: Paciente[] = [];

  constructor(
    private pacientesService: PacientesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: LanguageApp.spanish_datatables,
    };

    this.pacientesService.getPacientes().subscribe(pacientes => (this.pacientes = pacientes));
  }

}
