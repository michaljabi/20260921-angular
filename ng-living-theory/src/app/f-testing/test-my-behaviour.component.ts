import { Component } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

/**
 * Aby uruchomić testy, wykonaj polecenie:
 *
 * `npm test` w konsoli
 * */

@Component({
  selector: 'app-test-my-behaviour',
  imports: [I18nPluralPipe],
  template: `
    <h2>Podgląd komponentu do określania liczby like'ów</h2>
    <h3 class="subtitle is-family-monospace">test-my-behaviour</h3>
    <div>
      <h4>Witaj, na ten moment masz {{ count | i18nPlural: likesMapping }}</h4>
      <fieldset style="text-align: center">
        <button class="button" title="I like" (click)="handleCounterAdd(1)">👍</button>
        <button class="button" title="I dislike" (click)="handleCounterAdd(-1)">👎</button>
      </fieldset>
    </div>
  `,
})
export class TestMyBehaviourComponent {
  count = 0;
  likesMapping: Record<string, string> = {
    '=0': 'zero lajków',
    '=1': '# lajka',
    '=2': '# lajki',
    '=3': '# lajki',
    '=4': '# lajki',
    other: '# lajków',
  };

  handleCounterAdd(value: number): void {
    // Reguła: nie można mieć lajków mniej niż zero...
    if (this.count + value < 0) {
      return;
    }
    this.count += value;
  }
}
