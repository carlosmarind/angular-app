import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    fade
  ]
})
export class TodoComponent {

  items: string[] = ["comprar entradas concierto", "pasear al perro", "compras de supermercado", "renovar tarjeta de credito"]

  removeItem(item: string) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  addItem(input: HTMLInputElement) {
    this.items.push(input.value);
    input.value = "";
  }

}
