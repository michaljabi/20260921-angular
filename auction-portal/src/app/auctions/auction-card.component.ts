import { Component, input } from '@angular/core';
import { AuctionItem } from './auction-item';

@Component({
  imports: [],
  selector: 'app-auction-card',
  styles: ``,
  template: `<div class="card">
    @let auction = item();
    <div class="card-header">{{ item().title }}</div>
    <img class="card-img" [src]="auction.imgUrl" [alt]="auction.title" />
    <div class="card-body">
      <p class="card-text">
        {{ auction.description }}
      </p>
      <div class="d-flex justify-content-between align-content-center">
        <strong> {{ auction.price }} zł</strong>
        <button class="btn btn-primary">[ + ]</button>
      </div>
    </div>
  </div>`,
})
export class AuctionCardComponent {
  item = input.required<AuctionItem>();
}
