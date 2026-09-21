import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a-data-binding-concept',
  template: `
    <h2>Koncepcja bindowania widoku</h2>
    <h3 class="subtitle is-family-monospace">a-data-binding-concept</h3>
    <div>
      <p class="notification is-info">
        Widok komunikuje się z {{ logic }} za pomocą specjalnego syntaxu.
      </p>
      <ul class="box">
        <li>
          <code>{{ '{{' }}nazwaPolaWKlasie{{'}}'}}</code> - one Way data binding - dla
          <code>innerHTML</code>
        </li>
        <li><code>[innePole]</code> - one Way data binding - dla atrybutów HTML</li>
        <li><code>(nazwaPolaWKlasie)</code> - one Way data binding - dla event'ów</li>
      </ul>
      <div class="box">
        <div [title]="myTitle">Najedź na mnie aby zobaczyć tooltip !</div>
      </div>
      <div class="box">
        <div class="mb-3">
          <h6 class="title is-5">Angular natychmiastowo odpowiada na zmiany: {{ increment() }}</h6>
        </div>
        <button class="button" (click)="handleButtonClick()">
          Kliknij po przykładowy event ({{ increment() }})
        </button>
      </div>

      <div class="box">
        Możliwe jest również połączenie tego syntaxu <code>[]</code> + <code>()</code> co daje tzw.
        "Bananas in the box": <code>[()]</code> - two Way data binding, które omówimy w
        formularzach.
      </div>
      <div class="box">
        Znaki podwójnych nawiasów klamrowych, lub te z podwójnymi nawiasami kwadratowymi []="" dla
        atrybutów, można traktować jako
        <mark>portal w którym działa JavaScript</mark>
        <p class="notification mt-5">
          Przykładowo:
          <mark>{{ 2 + 3 + '!'.repeat(22) + 'a'.toUpperCase() }}</mark>
        </p>
        <p class="notification">
          A dla atrybutów:
          <a
            class="has-text-link"
            [href]="['http://regex101', 'com'].join('.')"
            [target]="'_' + 'blank'"
          >
            Link Test...
          </a>
        </p>
      </div>
    </div>
  `,
})
export class ADataBindingConceptComponent {
  // UWAGA:
  // KAŻDE POLE używane na widoku HTML — NIE MOŻE być prywatne!
  logic = 'Logiką';
  myTitle = 'Witaj w Angular';
  increment = signal(0);

  handleButtonClick() {
    this.increment.update((v) => v + 1);
  }
}
