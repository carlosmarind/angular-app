import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  disabled = new FormControl(false);


  accion() {
    console.log(this.position.value);
  }
}
