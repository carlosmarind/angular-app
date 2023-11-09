import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar',
})
export class CapitalizarPipe implements PipeTransform {

  transform(texto: string, parametro1: string): string {
    if (!texto) return "";
    return parametro1 + texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }
}
