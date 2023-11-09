import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizarPipe } from '../capitalizar.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-mi-componente-hijo',
  templateUrl: './mi-componente-hijo.component.html',
  styleUrls: ['./mi-componente-hijo.component.css']
})
export class MiComponenteHijoComponent {
  @Input() mensaje: string = "";
  @Output() mensajeSalida = new EventEmitter<string>();

  constructor(private capitalizar: CapitalizarPipe){}

  handleClick() {
    let mensaje = "hola desde el componente hijo"
    let mensajeCapitalizado = this.capitalizar.transform(mensaje,'');
    this.mensajeSalida.emit(mensajeCapitalizado);
  }
}
