import { Component, inject } from '@angular/core';
import { VegetableService } from './vegetable.service';

@Component({
  selector: 'app-interested',
  template: `
    <header class="subtitle is-family-monospace">
      interested ({{ vegetableService.numberOfVegetables() }})
    </header>
    <ul>
      @for (v of vegetableService.vegetables(); track v) {
        <li>{{ v }}</li>
      }
    </ul>
  `,
  providers: [
    /*
        Komponent jest hierarchiczny, co oznacza w praktyce,
        że jeśli odkomentujesz linię :21 poniżej (VegetableService),
        to zostanie przygotowana inna — druga instancja VegetableService i komponent nie otrzyma zmian,
        ponieważ komponent: communicate-with-long-distance będzie miał inną instancję!
    */
    // VegetableService,
  ],
})
export class InterestedComponent {
  vegetableService = inject(VegetableService);
}
