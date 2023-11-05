import { Pipe, PipeTransform } from '@angular/core';

// Config
// true | toggle-case = 'si vuela'
// false | toggle-case = 'no vuela'
@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): 'si vuela' | 'no vuela' {
    return canFly ? 'si vuela' : 'no vuela';
  }
}
