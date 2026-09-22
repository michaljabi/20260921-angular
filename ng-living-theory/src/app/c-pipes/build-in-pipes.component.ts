import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build-in-pipes',
  imports: [CommonModule],
  template: `
    <header class="subtitle is-family-monospace">build-in-pipes</header>
    <div>
      <h3>Przykłady użycia niektórych pipe wbudowanych</h3>
      <h4>JSON pipe</h4>
      <ul>
        <li>Bez pipe: {{ myObject }}</li>
        <li>Z użyciem pipe: {{ myObject | json }}</li>
      </ul>
      <h4>Date pipe</h4>
      <ul>
        <li>Bez pipe: {{ myDate }}</li>
        <li>Z użyciem pipe: {{ myDate | date }}</li>
        <li>Z użyciem pipe i argumentów: {{ myDate | date: 'yyyy-MM-dd HH:mm' }}</li>
      </ul>
      <h4>Currency pipe</h4>
      <ul>
        <li>Bez pipe: {{ myNumber }}</li>
        <li>Z użyciem pipe: {{ myNumber | currency }}</li>
        <li>Z użyciem pipe i argumentów: {{ myNumber | currency: 'EUR' }}</li>
      </ul>
      <h4>TitleCase/LowerCase/UpperCase pipe</h4>
      <ul>
        <li>Bez pipe: {{ myText }}</li>
        <li>Z użyciem lower: {{ myText | lowercase | titlecase | uppercase }}</li>
        <li>Z użyciem upper: {{ myText | uppercase }}</li>
        <li>Z użyciem title: {{ myText | titlecase }}</li>
      </ul>
      <h4>Async pipe</h4>
      <ul>
        <li>Bez pipe: {{ myObservable }}</li>
        <li>Z użyciem pipe: {{ myObservable | async }}</li>
      </ul>
      <h4>i18nPlural pipe</h4>
      <ul>
        <li>Bez pipe (1): {{ 1 }} wiadomości</li>
        <li>Z użyciem pipe (0): {{ 0 | i18nPlural: messageMapping }}</li>
        <li>Z użyciem pipe (1): {{ 1 | i18nPlural: messageMapping }}</li>
        <li>Z użyciem pipe (2): {{ 2 | i18nPlural: messageMapping }}</li>
        <li>Z użyciem pipe (30): {{ 30 | i18nPlural: messageMapping }}</li>
      </ul>
    </div>
  `,
})
export class BuildInPipesComponent {
  myObject: { name: string } = { name: 'Jan' };
  myDate = new Date();
  myNumber = 100;
  myText = 'Witaj w Pipe - playground';
  myObservable: Observable<string> = of('Unwrapped value');

  messageMapping: Record<string, string> = {
    '=0': 'Brak wiadomości...',
    '=1': '# wiadomość',
    other: '# wiadomości',
  };
}
