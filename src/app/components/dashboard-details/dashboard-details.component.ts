import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent {

  ambiente = 'desconocido';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params => {
      this.ambiente = params.get('entorno') ?? '';
    });
  }

}
