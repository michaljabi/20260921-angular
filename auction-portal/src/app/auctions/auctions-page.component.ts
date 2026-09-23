import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AuctionItem } from './auction-item';
import { httpResource } from '@angular/common/http';
import { AlertComponent } from '../shared/alert.component';
import { AuctionCardComponent } from './auction-card.component';

@Component({
  imports: [JsonPipe, AsyncPipe, AlertComponent, AuctionCardComponent],
  selector: 'app-auctions-page',
  styles: ``,
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      @if (auctions.hasValue()) {
        <div class="row">
          @for (auciton of auctions.value(); track auciton.id) {
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <app-auction-card [item]="auciton" (addToCart)="handleAddToCart($event)" />
            </div>
          }
        </div>
      } @else if (auctions.error()) {
        <app-alert text="Nie udało się załadować aukcji" type="alert-danger" />
      } @else if (auctions.isLoading()) {
        <app-alert text="Ładujemy aukcje" />
      }
      <hr class="my-5" />
      <div >
        {{ singleAuction | json }}
      </div>
      <div>
        <!-- jak działają pipes jedna po durigej (faktyczny pipeline) -->
        {{ singleActionPromise | async | json }}
      </div>
    </section>
  `,
})
export class AuctionsPageComponent implements OnInit, OnDestroy {
  
  auctions = httpResource<AuctionItem[]>(() => 'http://localhost:3000/auctions');

  // auctions = signal<AuctionItem[]>([
  //   {
  //     id: '2',
  //     title: 'Mac ',
  //     imgUrl: 'https://picsum.photos/id/48/600/600',
  //     description: 'Używany - ale sprawny',
  //     price: 4000,
  //   },
  //   {
  //     id: '3',
  //     title: 'Smartfon33',
  //     imgUrl: 'https://picsum.photos/id/160/600/600',
  //     price: 800,
  //   },
  //   {
  //     id: '4',
  //     title: 'Samochoódzzz',
  //     imgUrl: 'https://picsum.photos/id/183/600/600',
  //     description: 'Zabytkowy ogórek',
  //     price: 1200,
  //   },
  // ]);

  singleAuction: AuctionItem = {
    id: '1',
    title: 'Części do aparatu',
    imgUrl: 'https://picsum.photos/id/36/600/600',
    description: 'Jakiś opis',
    price: 2000,
  };

  // single auction Promise:
  singleActionPromise = Promise.resolve(this.singleAuction);

  handleAddToCart(auction: AuctionItem) {
    console.log('Aukcja zaraz zostanie dodana do koszyka', auction)
  }

  ngOnInit(): void {
    console.log('jest INIT')
  }
  ngOnDestroy(): void {
    console.warn('jest DESTROY')
  }
}
