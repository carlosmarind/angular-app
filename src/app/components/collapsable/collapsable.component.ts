import { Component } from '@angular/core';
import { openCloseParametric } from 'src/app/animations/open-close';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css'],
  animations: [openCloseParametric] // podria ser tambien openClose
})
export class CollapsableComponent {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
