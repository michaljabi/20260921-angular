import { Component, signal } from '@angular/core';



// C# perspective
// type MenuItem = {
//   href: string;
//   name: string;
// };

interface MenuItem {
  href: string;
  name: string;
};

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
        [class.show]="isMenuOpen()"
        [style.backgroundColor]="menuBackground"
      >
        <ul class="navbar-nav">
          @for (item of items; track item.name) {
            <li class="nav-item">
              <a class="nav-link" [href]="item.href">{{ item.name }}</a>
            </li>
          }
        </ul>
      </div>
    </nav>
  `,
})
export class MainMenuComponent {
  // Zadanie 12: przepraw isMenuOpen - na sygnał
  isMenuOpen = signal(true);
  menuBackground = '';

  // JS perspecive
  items: MenuItem[] = [
    { href: '/auctions', name: 'Aukcje' },
    { href: '/promotions', name: 'Promocje' },
    { href: '/advices', name: 'Podpowiadamy' },
  ];

  handleClick() {
    console.log('Jestem!');
    // ternary operator można:
    // this.isMenuOpen = this.isMenuOpen ? false : true;
    // a potem refactor do postaci:
    //this.isMenuOpen = !this.isMenuOpen;
    // vs Signal:

    const myVal = this.isMenuOpen();

    // this.isMenuOpen.set(!myVal);
    // this.isMenuOpen.set(!this.isMenuOpen());
    // this.isMenuOpen.set(!this.isMenuOpen());
    // 2 sposób (bezpieczna aktualizacja gdyby miałybyć tzw. "racing conditions")
    this.isMenuOpen.update(value => !value)
    // to to samo co taki zapis
    /*
    this.isMenuOpen.update(value => {
      
      
      return !value
    })
    */
  }
}
