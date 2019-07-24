import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
// [attr.ariaValuenow]="progreso1"
  progreso1: number = 20;
  progreso2: number = 30;


  constructor() { }

  ngOnInit() {
  }

  // Funcion para incrementar y disminuir barras
  // actualizar( event: number ) {
  //   console.log('Evento: ', event);
  // }



}
