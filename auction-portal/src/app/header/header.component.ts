import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styles: ``,
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1 (click)="title = 'suprise!'" >{{ title }}</h1>
      <em [title]="'Jestem widoczny po najechaniu'">funkcja Kup Teraz, {{ alreadyWorks() }}</em>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly alreadyWorks = signal('już działa !');

  protected title = 'Portal Aukcyjny'
}
