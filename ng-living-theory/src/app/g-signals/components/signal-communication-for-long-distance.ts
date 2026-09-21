import { Component, inject } from '@angular/core';
import { VegetableStore } from '../vegetable-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-communication-for-long-distance',
  template: `
    <header class="subtitle is-family-monospace">signal-communication-for-long-distance</header>
    <div class="panel is-link">
      <div class="panel-heading">Lista warzyw ({{ vegetableStore.numberOfVegetables() }})</div>
      @for (vegetable of vegetableStore.vegetables(); track vegetable) {
        <div class="panel-block">
          {{ vegetable }}
        </div>
      }
    </div>
    <div class="is-flex is-column-gap-2.5">
      <div class="select">
        <select [(ngModel)]="newVegetable">
          <option>onion</option>
          <option>garlic</option>
          <option>tomato</option>
          <option>potato</option>
        </select>
      </div>
      <button class="button is-primary" type="button" (click)="vegetableStore.add(newVegetable)">
        add {{ newVegetable }}...
      </button>
      <button class="button is-danger" type="button" (click)="vegetableStore.removeAll()">
        Remove all
      </button>
    </div>

    <blockquote class="mt-6">
      Komunikacja między komponentami w Angularze może być realizowana na kilka sposobów, a jednym z
      nich jest użycie <code>signal</code> w środku <code>service</code>.
      <p>
        Wyobraź sobie inny komponent, który nie jest w relacji
        <em>parent - child</em> w stosunku do komponentu
        <code>SignalCommunicationForLongDistance</code>, może on również korzystać z globalnie
        dostępnego (singleton) serwisu <code>VegetableStore</code>. Serwis ten może informować
        dowolny komponent o zmianach. Wystarczy, że zainteresowany komponent wstrzyknie serwis
        <code>VegetableStore</code> i będzie mógł korzystać z jego metod oraz obserwować zmiany w
        liście warzyw.
      </p>
    </blockquote>
  `,
  imports: [FormsModule],
  styles: ``,
})
export class SignalCommunicationForLongDistance {
  newVegetable = 'onion';
  vegetableStore = inject(VegetableStore);
}
