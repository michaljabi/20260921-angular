import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-effect',
  imports: [],
  template: `
    <header class="subtitle is-family-monospace">signal-effect</header>
    <div class="is-flex is-justify-content-center is-align-items-center is-column-gap-2">
      <button class="button is-warning" (click)="handleUpdateCount(-10)">-</button>
      <code class="is-4">{{ count() }}</code>
      <button class="button is-success" (click)="handleUpdateCount(10)">+</button>
    </div>
    <p>{{ message }}</p>
  `,
  styles: ``,
})
export class SignalEffect {
  message = '';
  count = signal(230);

  constructor() {
    effect(() => {
      const currentCount = this.count();
      this.message =
        currentCount > 250
          ? 'Liczba przekroczyła 250!'
          : currentCount < 220
            ? 'Liczba jest poniżej 220!'
            : '';
    });
  }

  handleUpdateCount(value: number) {
    this.count.update((c) => c + value);
  }
}
