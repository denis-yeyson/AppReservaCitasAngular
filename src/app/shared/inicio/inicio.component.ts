import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  slide = [
    { titulo: 'EXITO',subtitulo:'Somos los mejores', img: '../assets/img/inicio/slide-one.jpg' },
    { titulo: 'CALIDAD',subtitulo:'Atencion de calidad', img: '../assets/img/inicio/slide-two.jpg' },
    { titulo: 'ECONOMICO',subtitulo:'Precios bajos', img: '../assets/img/inicio/slide-three.jpg' },
 ];

  sedes = [
    { nombre: 'sede1',dir:'Calle Las Carmelias Av. Rosas', img: '../assets/img/sedes/sede1.webp' },
    { nombre: 'sede2',dir:'Calle Las Carmelias Av. Rosas', img: '../assets/img/sedes/sede2.webp' },
    { nombre: 'sede3',dir:'Calle Las Carmelias Av. Rosas', img: '../assets/img/sedes/sede3.webp' }
  ];

  espec = [
    { nombre: 'Cardiología', img: '../assets/img/especialidades/esp1.jpg' },
    { nombre: 'Oncología', img: '../assets/img/especialidades/esp2.jpg' },
    { nombre: 'Gastroenterología', img: '../assets/img/especialidades/esp3.jpg' },
    { nombre: 'Ginecología', img: '../assets/img/especialidades/esp4.jpg' },
    { nombre: 'Pediatría', img: '../assets/img/especialidades/esp5.jpg' },
    { nombre: 'Oftalmología', img: '../assets/img/especialidades/esp6.jpg' },
    { nombre: 'Traumatología', img: '../assets/img/especialidades/esp7.jpg' },
    { nombre: 'Odontología', img: '../assets/img/especialidades/esp8.jpg' },
    { nombre: 'Dermatología', img: '../assets/img/especialidades/esp9.jpg' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
