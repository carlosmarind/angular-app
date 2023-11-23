import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard } from './components/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { FormularioUnoComponent } from './components/formulario-uno/formulario-uno.component';
import { FormularioDosComponent } from './components/formulario-dos/formulario-dos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-uno', component: FormularioUnoComponent },
  { path: 'formulario-dos', component: FormularioDosComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' }, //misitio.cl/dashboard
      { path: 'general', component: DashboardGeneralComponent }, //misitio.cl/dashboard/general
      { path: ':entorno', component: DashboardDetailsComponent }, //misitio.cl/dashboard/:entorno
    ]
  },

  { path: '**', component: NotFoundComponent } //misitio.cl/sdfsdfsdsdfs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
