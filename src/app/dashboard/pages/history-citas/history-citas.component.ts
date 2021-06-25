import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageApp } from '../../interfaces/LanguageApp.interface';
import { CitasService } from '../citas/citas.service';
import { listaCitas } from '../citas/interfaces/fecha_disponibles.interface';

@Component({
  selector: 'app-history-citas',
  templateUrl: './history-citas.component.html',
  styleUrls: ['./history-citas.component.scss']
})
export class HistoryCitasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listaCitas:listaCitas[]=[];

  constructor(private citasService:CitasService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: LanguageApp.spanish_datatables,
    };
    let datos=localStorage.getItem("tipo_usuario")+','+localStorage.getItem("id_usuario");
    this.citasService.listaCitasReservadas(datos).subscribe(listaCitas=>{this.listaCitas=listaCitas});
  }

}
