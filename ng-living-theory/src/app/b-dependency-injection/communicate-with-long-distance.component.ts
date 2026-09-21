import { Component, inject } from '@angular/core';
import { VegetableService } from './vegetable.service';
import { SubDeepBoxComponent } from './sub-deep-box.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-communicate-with-long-distance',
  imports: [SubDeepBoxComponent, FormsModule],
  template: `
    <h2>Komunikacja na dalekie odległości - Services</h2>
    <h3 class="subtitle is-family-monospace">communicate-with-long-distance</h3>
    <div>
      <h5>Komponent dodający do serwisu:</h5>
      <!-- Zwróć uwagę na ngModel - zastosowano tutaj "two-way data binding" -->
      <div class="box field is-grouped">
        <div class="control is-expanded">
          <label for="vege" class="label">Warzywo:</label>
          <input
            id="vege"
            class="input"
            [(ngModel)]="inputValue"
            (keyup.enter)="handleNewVegetableClick()"
          />
        </div>
        <div class="control ">
          <button class="button is-link" (click)="handleNewVegetableClick()">
            Dodaj wpisane warzywo
          </button>
        </div>
      </div>
      <app-sub-deep-box />
    </div>
  `,
  // stan będzie "ulotny" jeśli odkomentujesz:
  // providers: [VegetableService],
})
export class CommunicateWithLongDistanceComponent {
  // Korzystamy z Dependency Injections:
  private vegetableService = inject(VegetableService);

  inputValue = 'onion';

  handleNewVegetableClick(): void {
    if (!this.inputValue) {
      return alert('Wpisz nazwę warzywa!');
    }
    this.vegetableService.add(this.inputValue);
    // dzięki wykorzystaniu two-way data binding wartość wyczyszczona tutaj kasuje wpis w input:
    this.inputValue = '';
  }
}
