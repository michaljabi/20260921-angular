import { Component, inject } from '@angular/core';
import { AuctionsService } from './auctions.service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-promotions-page',
  styles: ``,
  template: `
    <p>promotions-page works!</p>
    <!-- można to zrobić prościej -  używając routerLink ! ale tutaj celowo chemy testować DI Routera poniżej! -->
    <!-- <button class="btn btn-info" (click)="router.navigate(['/'])">Zabierz mnie do domu</button> -->
   
      <button class="btn btn-info" (click)="handleGoHome()">Zabierz mnie do domu</button>
    
  `,
})
export class PromotionsPageComponent {
  // nie ma nic w tablicy `providers: []` w tym komponencie
  // więć korzystamy z Environment Hierarchy DI. (signleton z @Service())
  auctionsService = inject(AuctionsService);

  protected readonly router = inject(Router);

  // Dawniej DI:
  // constructor(protected readonly router: Router) {
  // }

  handleGoHome() {
    // jak programistycznie nawigować Routerem?
    this.router.navigate(['/'])
  }
}
