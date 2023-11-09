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


@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiComponenteHijoComponent,
    TextColorDirective,
    CapitalizarPipe,
    NumElementPipe,
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
