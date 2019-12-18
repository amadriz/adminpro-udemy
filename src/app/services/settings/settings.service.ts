import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
// Servicio para que quede establecido el color del tema
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // tslint:disable-next-line: variable-name
  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }


guardarAjustes() {
  // Convierte est Json en un string para poder guardarlo en el local storage
  // console.log('Guardado en el localStorage');
  localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
}

cargarAjustes() {

  if ( localStorage.getItem('ajustes') ) {
    this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    //console.log('Cargando del localstorage');

    this.aplicarTema( this.ajustes.tema );

  } else {
    console.log('Cargando valores por defecto');
    this.aplicarTema( this.ajustes.tema );
  }
}
aplicarTema( tema: string ) {

  const url = `assets/css/colors/${ tema }.css`;
  // El id="theme" esta en el index, url del css
  this._document.getElementById('theme').setAttribute('href', url);

  // Servicio para que no cambie el tema

  this.ajustes.tema = tema;
  this.ajustes.temaUrl = url;

  this.guardarAjustes();


}

}

// Interface me ayuda a manejar los ajustes
interface Ajustes {
  temaUrl: string;
  tema: string;
}
