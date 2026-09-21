import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleUpdateElementComponent } from './lifecycle-update-element.component';

@Component({
  selector: 'app-lifecycle-presentation',
  imports: [FormsModule, LifecycleUpdateElementComponent],
  // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <header class="subtitle is-family-monospace">lifecycle-presentation</header>
    <div>
      <fieldset>
        <label class="label mx-3">
          Wpisz kod:
          <input class="input" [(ngModel)]="mySecret" />
        </label>
        <button class="button is-success m-3" (click)="handleVisibilityChange(true)">
          Pokaż Komponent
        </button>
        <button class="button is-danger m-3" (click)="handleVisibilityChange(false)">
          Ukryj Komponent
        </button>
      </fieldset>
      <div class="box">
        <h3>Sterowany komponent:</h3>
        @if (showComponent) {
          <app-lifecycle-update-element [secretCode]="mySecret" />
        }
      </div>
    </div>
  `,
})
export class LifecyclePresentationComponent {
  showComponent = true;
  mySecret = 's3cr3t';

  handleVisibilityChange(flag: boolean): void {
    this.showComponent = flag;
  }
}
