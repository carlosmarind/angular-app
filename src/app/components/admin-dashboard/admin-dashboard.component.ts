import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ApiBackendService } from 'src/app/services/api-backend.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users: User[] = [];

  formData = {
    name: '',
    email: ''
  }

  constructor(private backend: ApiBackendService) { }

  onSubmit() {
    this.backend.postData(this.formData).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.error }
    });
  }

  ngOnInit(): void {

    let parametros = {
     
    }

    this.backend.getData(parametros).subscribe({

      next: (data) => {
        console.log(data)
        this.users = data;


      },
      error: (error) => {
        console.error('se ha producido un error en el servicio api backend')
        console.error(error)
      },
    });
  }


}
