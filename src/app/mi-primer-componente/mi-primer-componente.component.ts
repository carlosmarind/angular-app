import { Component, OnDestroy, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  servicio: MiServicioService;
  esEspecial = true;
  public mensaje = "Alexa";
  textoImagen = "imange de personaje";
  urlImagen = "https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png"
  miClase = "mi-clase-especial";
  mensajeinicializacion = ""
  colorStyle = 'red';
  mensajePadre = "hola a todos desde el componente padre"

  constructor(miServicio: MiServicioService) {
    this.servicio = miServicio;
  }

  ngOnDestroy(): void {
    this.mensajeinicializacion = "destruyendo componente";
  }

  ngOnInit(): void {
    this.mensajeinicializacion = "componente inicializado";
  }

  saludar() {
    this.mensaje = this.servicio.saludar();
    this.mensajePadre = this.mensaje;
  }

  recibirMensaje(mensaje: string) {
    this.mensajeinicializacion = mensaje;
    console.log(mensaje);

    this.esEspecial = !this.esEspecial;

  }
}
