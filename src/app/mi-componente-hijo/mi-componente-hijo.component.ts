import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mi-componente-hijo',
  templateUrl: './mi-componente-hijo.component.html',
  styleUrls: ['./mi-componente-hijo.component.css']
})
export class MiComponenteHijoComponent {
  @Input() mensaje: string = "";
  @Output() mensajeSalida = new EventEmitter<string>();


  handleClick() {
    this.mensajeSalida.emit("hola desde el hijo");
  }
}
