import { Component, OnInit, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

interface Fruit {
  amount: number;
  name: string;
}

@Component({
  selector: 'app-for-of-loop',
  template: `
    <h2>Iterowanie po wartościach w tablicy + generowanie HTML</h2>
    <h3 class="subtitle is-family-monospace">for-of-loop</h3>
    <div>
      @for (letter of ['a', 'b', 'c', 'd']; track letter) {
        <div>{{ letter }} !</div>
      }
    </div>
    <ul>
      @for (fruit of fruits; track fruit.name) {
        <li>{{ fruit.amount }} - {{ fruit.name }}</li>
      }
    </ul>

    <div class="panel is-info">
      <p class="panel-heading ">Kosz z owocami...</p>
      @for (fruit of fruits; track fruit.name) {
        <div class="panel-block">{{ fruit.amount }} - {{ fruit.name }}</div>
      }
    </div>

    <div class="panel is-warning">
      <p class="panel-heading ">Kosz z owocami zmieniający się w czasie (stan danych)</p>
      @for (fruit of stateFruits(); track fruit.name) {
        <div class="panel-block">{{ fruit.amount }} - {{ fruit.name | titlecase }}</div>
      }
    </div>
  `,
  imports: [TitleCasePipe],
})
export class ForOfLoopComponent implements OnInit {
  // Zwróć uwagę, że korzystamy z modelu danych,
  // Interface (typ danych) jest zdefiniowany powyżej
  fruits: Fruit[] = [
    { amount: 2, name: 'bananas' },
    { amount: 1, name: 'apple' },
    { amount: 10, name: 'cherries' },
  ];

  protected readonly stateFruits = signal(this.fruits);

  ngOnInit(): void {
    setTimeout(() => {
      this.stateFruits.update((fruits) => [
        ...fruits,
        { amount: 5, name: 'kiwi' },
        { amount: 3, name: 'mangoes' },
      ]);
    }, 2000);
  }
}
