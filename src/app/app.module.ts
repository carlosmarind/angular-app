import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiComponenteHijoComponent } from './mi-componente-hijo/mi-componente-hijo.component';
import { TextColorDirective } from './text-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiComponenteHijoComponent,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
