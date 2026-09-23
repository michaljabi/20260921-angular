import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

const DEFAULT_TITLE = 'Portal Aukcyjny';

@Component({
  imports: [JsonPipe],
  selector: 'app-header',
  styles: ``,
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1 (click)="titleToggler()">{{ title }}</h1>
      <em [title]="'Jestem widoczny po najechaniu'">funkcja Kup Teraz, {{ alreadyWorks() }}</em>
      <div>Zalogowany użytkownik to: {{ loggedInUser() | json }}</div>
    </header>
  `,
})
export default class HeaderComponent {
  protected readonly alreadyWorks = signal('już działa !');

  loggedInUser = signal({ name: 'Michał' });

  protected title = DEFAULT_TITLE;

  constructor() {
    setTimeout(() => {
      const user = this.loggedInUser();
      user.name = 'Kasia';

      // Spread (shallow copy)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // this.loggedInUser.set({...user});

      // clone (deep copy)
      this.loggedInUser.set(structuredClone(user));

      // Dlaczego?
      // Bo obiekty przekazywane są przez refercję
      // a jeśli 
      // ob1 === ob1 (ten sam obiekt) => to Sygnał nie rozgłasza !
    }, 2000);
  }

  titleToggler() {
    this.title = this.title === DEFAULT_TITLE ? 'Portal do Kupowania' : DEFAULT_TITLE;
  }
}
