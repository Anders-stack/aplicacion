import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dato: string;
  v: Array<string> = new Array<string>(5);
  cima: number;
  mensaje = ' ';


  constructor() {

    this.cima = -1;

  }

  vacia(): boolean {
    return (this.cima === -1);
  }

  llena(): boolean {
    return  (this.cima === 4);
  }
  insertar(){
    if (this.llena()) {
      this.mensaje = 'Pila llena!';
      return;
    }
    this.cima++;
    this.v[this.cima] = this.dato;
    this.dato = ' ';
  }

  ver(){
    let i: number;
    for (i = 0; i <= this.cima; i++) {
      console.log(this.v[i]);
    }
  }

  extraer() {
    if (this.vacia()) {
      this.mensaje = 'Pila vacia!';
      return;
    }
    this.mensaje = 'Valor extraido: ' + this.v[this.cima];
    this.v[this.cima] = ' ';
    this.cima--;
  }

}
