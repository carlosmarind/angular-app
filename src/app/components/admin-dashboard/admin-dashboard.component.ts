import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiBackendService } from 'src/app/services/api-backend.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users: any;

  formData: { name: string, email: string } = {
    name: '',
    email: ''
  };

  constructor(private backend: ApiBackendService) { }

  onSubmit(): void {
    console.log(this.formData);
    this.backend.postData(this.formData).subscribe({
      next: (response) => console.log('Respuesta del servidor:', response),
      error: (error) => console.error('Error en la solicitud:', error)
    });
  }

  ngOnInit(): void {
    let params = { id: [1, 2] }
    this.backend.getData(params).subscribe({
      next: (data) => { this.users = data; },
      error: (error) => {
        console.log(error);
      },
      complete: () => { console.log('complete'); }
    })
  }
}
