import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path : '' , redirectTo: 'general', pathMatch: 'full'}, //misitio.cl/dashboard
      {path : 'general', component: DashboardGeneralComponent}, //misitio.cl/dashboard/general
      {path: ':entorno', component: DashboardDetailsComponent} //misitio.cl/dashboard/:entorno
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
