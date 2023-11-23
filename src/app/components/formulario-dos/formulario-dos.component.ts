import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-formulario-dos',
  templateUrl: './formulario-dos.component.html',
  styleUrls: ['./formulario-dos.component.css']
})
export class FormularioDosComponent implements OnInit {


  nombre = new FormControl('Alexa');

  appForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, forbiddenNameValidator(/bob/i)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),

    }),
    aliases: new FormArray([])
  })

  appFormBuilder = this.fb.group({
    firstName: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    address: this.fb.group({
      street: [''],
      city: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nombre.valueChanges.subscribe(valor => {
      console.log(valor);
    }
    );
  }

  actualizarnombre() {
    this.nombre.setValue('Juan');
  }

  updateProfile() {
    this.appFormBuilder.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.appFormBuilder.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }

}
