import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TooltipsComponent } from '../tooltips/tooltips.component';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, TooltipsComponent, ButtonComponent, CardComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabs = ['Primero', 'Segundo', 'Tercero'];
  selected = new FormControl(0);

  addTab(seleccionarAlAgregar: boolean) {
    this.tabs.push('Nuevo');
    if (seleccionarAlAgregar) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
