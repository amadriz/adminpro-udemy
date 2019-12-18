import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

// @Inject para manipular el DOM
  // tslint:disable-next-line: variable-name
  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  // Funcion para cambiar el color del tema
  // se define variable ul del template del css
  cambiarColor( tema: string, link: any ) {
// Invocar funcion para ponerle el check
 this.aplicarCheck( link );
// Invocar funcion para cambiar tema / color
 this._ajustes.aplicarTema( tema );


}
// Funcion para que se ponga el check en el cuadro de color

    aplicarCheck( link: any ) {

     const selectores: any = document.getElementsByClassName('selector');

     for ( const ref of selectores ) {
        // Remover clase working
        ref.classList.remove('working');
     }

     link.classList.add('working');

   }

   colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }
}
