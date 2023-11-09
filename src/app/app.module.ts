import { NgModule, LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiComponenteHijoComponent } from './mi-componente-hijo/mi-componente-hijo.component';
import { TextColorDirective } from './text-color.directive';
import { CapitalizarPipe } from './capitalizar.pipe';
import { UpperCasePipe } from '@angular/common';
import { NumElementPipe } from './num-element.pipe';



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
