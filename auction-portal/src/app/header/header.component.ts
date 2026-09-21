import { Component, signal } from '@angular/core';

const DEFAULT_TITLE = 'Portal Aukcyjny'

@Component({
  imports: [],
  selector: 'app-header',
  styles: ``,
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1 (click)="titleToggler()">{{ title }}</h1>
      <em [title]="'Jestem widoczny po najechaniu'">funkcja Kup Teraz, {{ alreadyWorks() }}</em>
    </header>
  `,
})
export default class HeaderComponent {
  protected readonly alreadyWorks = signal('już działa !');

  protected title = DEFAULT_TITLE;

  titleToggler() {
    this.title = this.title === DEFAULT_TITLE ? 'Portal do Kupowania' : DEFAULT_TITLE;
  }
}
