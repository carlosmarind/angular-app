import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';
import { MiComponenteHijoComponent } from './components/mi-componente-hijo/mi-componente-hijo.component';
import { TextColorDirective } from './directives/text-color.directive';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { NumElementPipe } from './pipes/num-element.pipe';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiComponenteHijoComponent,
    TextColorDirective,
    CapitalizarPipe,
    NumElementPipe,
    HomeComponent,
    DashboardComponent,
    DashboardGeneralComponent,
    DashboardDetailsComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CapitalizarPipe,
    NumElementPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
