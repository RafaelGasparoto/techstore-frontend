import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}
