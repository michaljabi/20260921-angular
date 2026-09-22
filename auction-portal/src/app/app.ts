import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './common/header.component';
import { MainMenuComponent } from './common/main-menu.component';
import { AlertComponent } from './shared/alert.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent, AlertComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected hiddenText = 'Jestem widoczny';

  protected testSignal = signal('Mój sygnał');

  constructor() {
    setTimeout(() => {
      // To by zadziałało z tzw. "Zone check dection"
      this.hiddenText = 'ZMIANA!';
      // ALE w "zoneless" (default v.22 Angulara)
      // musimy mieć sygnał!
    }, 3000);

    setTimeout(() => {
      this.testSignal.set('Zmiana sygnału!');
    }, 2000);
  }
}

/*

const arr = this.menuItemsInput();

this.menuItemsInput.set([...arr, { }])

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
