import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-main-menu',
  styles: ``,
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button (click)="handleClick()" class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        (mouseover)="menuBackground = 'red'"
        (mouseout)="menuBackground = ''"
        class="collapse navbar-collapse"
        [class.show]="isMenuOpen"
        [style.backgroundColor]="menuBackground"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/auctions">Aukcje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/promotions">Promocje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/advices">Podpowiadamy</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class MainMenuComponent {
  isMenuOpen = false;
  menuBackground = '';

  handleClick() {
    console.log('Jestem!');
    // ternary operator można:
    // this.isMenuOpen = this.isMenuOpen ? false : true;
    // a potem refactor do postaci:
    this.isMenuOpen = !this.isMenuOpen;
  }
}
