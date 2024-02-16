import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = 'Violeta'
  
  build = environment.build;
  api = environment.api

  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('login');
    this.router.navigate(['/']);
  }
}
