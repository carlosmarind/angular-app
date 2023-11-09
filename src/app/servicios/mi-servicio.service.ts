import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }

  saludar() {
    return "hola mundo desde mi servicio";
  }
}
