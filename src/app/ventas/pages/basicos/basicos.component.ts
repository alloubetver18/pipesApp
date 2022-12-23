import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'alban';
  nombreUpper: string = 'ALBAN';
  nombreCompleto: string = 'AlBan loUbEt';

  fecha: Date = new Date(); //el dia de hoy
}
