import { Component } from '@angular/core';
import { InterestedComponent } from './interested.component';

@Component({
  selector: 'app-sub-deep-box',
  imports: [InterestedComponent],
  template: `
    <!-- komponent zrobiony tylko po to żeby oddalić interested od communicate-with-long-distance -->
    <header class="subtitle is-family-monospace">sub-deep-box</header>
    <app-interested />
  `,
})
export class SubDeepBoxComponent {}
