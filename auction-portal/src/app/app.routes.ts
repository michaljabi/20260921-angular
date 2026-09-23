import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import HeaderComponent from './common/header.component';
import { CartPageComponent } from './auctions/cart-page/cart-page.component';
import { AddAuctionPageComponent } from './auctions/add-auction-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auctions' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },

  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },
  // Wildcard: (404) - nie znalazłem żandej ścieżki fallback:
  { path: '**', component: HeaderComponent },
];
