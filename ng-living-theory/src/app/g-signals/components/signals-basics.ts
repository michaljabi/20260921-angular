import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-used-in-component',
  imports: [],
  template: `
    <header class="subtitle is-family-monospace">signal-basics</header>
    <div class="is-flex is-justify-content-center is-align-items-center is-column-gap-2">
      <button class="button is-warning" (click)="handleUpdateCount(-2)">-</button>
      <div class="title is-4">{{ count() }}</div>
      <button class="button is-success" (click)="handleUpdateCount(2)">+</button>
    </div>
  `,
  styles: ``,
})
export class SignalsBasics {
  count = signal(200);

  handleUpdateCount(value: number) {
    this.count.update((c) => c + value);
  }
}
