import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dato: string;
  v: Array<string> = new Array<string>(5);
  entrada: number;
  salida: number;
  mensaje = '';

  constructor() {
    this.entrada = this.salida = -1;
  }

  vacia(): boolean {
    return (this.entrada === -1 && this.salida === -1);
  }
  llena(): boolean {
    return ((this.entrada + 1) % 5 === this.salida);
  }
  insertar() {
    if (this.llena()) {
      this.mensaje = 'Cola llena';
      return;
    }
    else if (this.vacia()) {
      this.entrada = this.salida = 0;
    } else {
      this.entrada = (this.entrada + 1) % 5;
    }
    this.v[this.entrada] = this.dato;
    this.dato = '';
  }
  extraer() {
    if (this.vacia()){
      console.log('Cola vacia');
      this.mensaje = 'Cola vacia';
      return;
    }
    else{
    this.mensaje = 'Valor extraido' + this.v[this.salida];
    this.v[this.salida] = ' ';
        if((this.entrada === this.salida) {
          this.entrada = this.salida = -1;
      }
      else{
        (this.salida +1) % 5;
      }
    }
  }
}


