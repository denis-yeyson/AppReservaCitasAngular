import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';
import { Medico } from './medico.interface';
import { LanguageApp } from '../../interfaces/LanguageApp.interface';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  medicos: Medico[] = [];

  constructor(private medicosService: MedicosService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: LanguageApp.spanish_datatables,
    };

    this.medicosService.getMedicos().subscribe(medicos => (this.medicos = medicos));

  }

}
