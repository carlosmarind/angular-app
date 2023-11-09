import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numElement',
  pure: false,
})
export class NumElementPipe implements PipeTransform {

  transform(lista: any[]): number {
    return lista.length;
  }

}
