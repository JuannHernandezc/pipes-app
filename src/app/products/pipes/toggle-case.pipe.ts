import { Pipe, PipeTransform } from '@angular/core';

//Config
// fernando | toggle-case = 'FERNANDO'
// FERNANDO | toggle-case = 'fernando'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{
  transform( value: string, toUpper: boolean = false ): string {
    return toUpper ?
      value.toUpperCase() :
      value.toLowerCase();
  }
}
