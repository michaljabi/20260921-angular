import { Component } from '@angular/core';

@Component({
  selector: 'app-a-style-is-hermetic',
  template: `
    <div class="title is-3">Hermetyczność styli</div>
    <div class="title is-4 bold subtitle is-family-monospace">a-style-is-hermetic</div>
    <div>
      <h1>Style w tym</h1>
      <h2>komponencie</h2>
      <h3>Nie obowiązują w innych</h3>
    </div>
  `,
  styles: [
    `
      h1 {
        background-color: chocolate;
        color: white;
        padding-left: 20px;
      }
      h2 {
        background-color: cornflowerblue;
        font-family: Consolas, monospace;
        font-size: small;
        text-align: center;
        color: white;
        padding: 2rem;
      }
      h3 {
        text-align: right;
      }
    `,
  ],
})
export class AStyleIsHermeticComponent {}
