import { Component, OnDestroy, OnInit } from '@angular/core';
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  personas = [
    {
      id: 0,
      nombre: "Alexa",
      edad: 22,
      vacuna: true,
    },
    {
      id: 1,
      nombre: "Romina",
      edad: 32,
      vacuna: false,
    },
    {
      id: 3,
      nombre: "Maximo",
      edad: 42,
      vacuna: true,
    },
    {
      id: 4,
      nombre: "Joao",
      edad: 12,
      vacuna: false,
    }
  ]
  color = "rojo";
  servicio: MiServicioService;
  esEspecial = true;
  public mensaje = "Alexa";
  textoImagen = "imange de personaje";
  urlImagen = "https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png"
  miClase = "mi-clase-especial";
  mensajeinicializacion = ""
  colorStyle = 'red';
  mensajePadre = "hola a todos desde el componente padre"
  
  mensajePipes = "este mensaje SeRa  Modificado por los pipes"
  numeroPipes = 13.56;
  fechaActual = new Date();

  fechas :Date [] =[];

  user = {
    name : 'Carlos'
  }

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
    // referencia
    
    let userDos = {...this.user};
    console.log( userDos == this.user);

    userDos.name = "Alexa";
    console.log('imprimiendo user', this.user);
    console.log('imprimiendo userDos',userDos);
  }

  recibirMensaje(mensaje: string) {
    this.mensajeinicializacion = mensaje;
    console.log(mensaje);

    this.esEspecial = !this.esEspecial;

  }

  addDate(){
    this.fechas.push(new Date());
  }
}
