import { Component } from '@angular/core';
import {interval, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelectPipe
  public name: string = 'Nicolas';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPluralPipe
  public clients: string[] = ['Nicolas', 'Maria', 'Benjamin', 'Juliana', 'Oscar', 'Alfonso', 'Fernando'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperanndo'
  }
  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValuePipe
  public person = {
    name: 'Nicolas',
    age: 23,
    address: 'Bogota Colombia'
  }

  // AsyncPipe

  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(val => console.log(val))
    )
}
