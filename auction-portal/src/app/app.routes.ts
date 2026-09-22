import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import HeaderComponent from './common/header.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auctions' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  // Wildcard: (404) - nie znalazłem żandej ścieżki fallback:
  { path: '**', component: HeaderComponent },
];
