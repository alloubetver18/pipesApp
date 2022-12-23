import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  nombre: string = 'alBan loUbEt';
  valor: number = 1000;
  obj = {
    nombre: 'Alban',
  };

  constructor(private primeNgConfig: PrimeNGConfig) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primeNgConfig.ripple = true;
  }
  mostrarNombre() {
    console.log(this.nombre);
  }
}
