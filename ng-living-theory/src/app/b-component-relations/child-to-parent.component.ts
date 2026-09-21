import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  template: `
    <h3 class="subtitle is-family-monospace">child-to-parent</h3>
    <ul>
      @for (f of fruits(); track f) {
        <li
          (click)="handleClick(f)"
          (keyup.enter)="handleClick(f)"
          [tabindex]="$index + 2"
          title="kliknij aby uruchomić event!"
        >
          {{ f }}
        </li>
      }
    </ul>
  `,
  styles: ['li {color: dodgerblue; text-decoration: underline; cursor: pointer}'],
})
export class ChildToParentComponent {
  fruits = input<string[]>([]);
  fruitClicked = output<string>();

  handleClick(fruitName: string): void {
    this.fruitClicked.emit(fruitName);
  }
}
