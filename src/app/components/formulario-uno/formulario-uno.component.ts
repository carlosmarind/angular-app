import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css']
})
export class FormularioUnoComponent {

  formData = {
    name: '',
    lastName: '',
    birthDate: '',
    gender: '',
    calificacion: 0,
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("enviado datos de formulario", this.formData);
      form.resetForm();
    } else {
      console.log("formulario invalido");
    }
  }
}
