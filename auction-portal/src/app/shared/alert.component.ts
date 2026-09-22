import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-alert',
  styles: ``,
  template: `
    <div class="alert" [class]="type()" role="alert">
      {{ text() }} {{ myLuckyNumber() }}
    </div>
  `,
})
export class AlertComponent {
   text = input('Hello?!');
   type = input('alert-info')

   myLuckyNumber = input(3);

   constructor() {
      console.log('myLuckyNumber ma wartość', this.myLuckyNumber())
   }
}

// Angular pod spodem robi na widoku tak:
// new AlertComponent() //#1
// new AlertComponent() //#2
// new AlertComponent() //#3 

// const myInstance = new AlertComponent();
// myInstance.text = ''