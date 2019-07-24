import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Vie
  @ViewChild('txtProgress', null) txtProgress: ElementRef;
  // @Input para recibir las variables desde el componente padre
  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  // Cambio en el progreso, Sintaxis para emitir un numero como un evento (INCREMENTADOR) se utiliza en progress.component.html
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  // FN Para que cambie el valor cuando se escribe en el input de la barra

  onChanges( newValue: number ) {

    // [0] es la posicion en el array del elemento
    // tslint:disable-next-line: prefer-const
    // let elemHTML: any = document.getElementsByName('progreso') [0]

    if ( newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // Elemento html
    // elemHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    // Event emitter > voy a emitir el progreso
    this.cambioValor.emit( this.progreso );
  }

  // FUNCION PARA CAMBIAR VALOR DE BARRA DE PROGRESO

  cambiarValor( valor ) {
    // El valor debe de ser mayor
    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    // Emitir el evento this.progreso = al valor numerico del momento.
    this.cambioValor.emit( this.progreso );

    // Poner el foco o cursor en el numero
    this.txtProgress.nativeElement.focus();

  }

  constructor() {

    // console.log('Leyenda', this.leyenda)
    console.log('progreso', this.progreso);

   }

  ngOnInit() {

    // console.log('Leyenda', this.leyenda)
    console.log('progreso', this.progreso);


  }

}
