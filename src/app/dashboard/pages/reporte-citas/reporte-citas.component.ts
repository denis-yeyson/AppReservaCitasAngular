import { Component, OnInit } from '@angular/core';
import { CitasService } from '../citas/citas.service';
import { listaCitas } from '../citas/interfaces/fecha_disponibles.interface';

@Component({
  selector: 'app-reporte-citas',
  templateUrl: './reporte-citas.component.html',
  styleUrls: ['./reporte-citas.component.scss']
})
export class ReporteCitasComponent implements OnInit {
  listaCitasReporte:listaCitas[]=[];

  constructor(private citasService:CitasService){ }

  ngOnInit(): void {
    let datos=localStorage.getItem("tipo_usuario")+','+localStorage.getItem("id_usuario");
    this.citasService.listaCitasReservadas(datos).subscribe(listaCitasReporte=>{this.listaCitasReporte=listaCitasReporte});
  }

}
