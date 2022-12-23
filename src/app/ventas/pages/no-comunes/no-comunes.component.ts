import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  personah: boolean = true;
  nombre: string = 'Alban';
  genero: string = 'masculino';

  nombre2: string = 'Susana';
  genero2: string = 'femenino';

  invitacionMapa: {} = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  // i18nPlural
  clientes: string[] = [
    'Maria',
    'Francisco',
    'Jose Manuel',
    'Rocio',
    'Eduardo',
  ];
  clientesMapa: {} = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    if (this.personah) {
      this.nombre = this.nombre2;
      this.genero = this.genero2;
      this.personah = false;
    } else {
      this.nombre = 'Alban';
      this.genero = 'masculino';
      this.personah = true;
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Alban',
    edad: 35,
    direccion: 'Medina de Rioseco, Valladolid',
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(1000); //0, 1, 2, 3,...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 11000);
  });
}
