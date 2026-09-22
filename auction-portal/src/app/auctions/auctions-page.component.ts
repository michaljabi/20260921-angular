import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AuctionItem } from './auction-item';

@Component({
  imports: [JsonPipe, AsyncPipe],
  selector: 'app-auctions-page',
  styles: ``,
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>

      <div class="row">
        @for (auciton of auctions(); track auciton.id) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            {{ auciton | json }}
          </div>
        }
      </div>

      <div>
        {{ singleAuction | json }}
      </div>
      <div>
        <!-- jak działają pipes jedna po durigej (faktyczny pipeline) -->
        {{ singleActionPromise | async | json }}
      </div>
    </section>
  `,
})
export class AuctionsPageComponent {
  auctions = signal<AuctionItem[]>([
    {
      id: '2',
      title: 'Mac ',
      imgUrl: 'https://picsum.photos/id/48/600/600',
      description: 'Używany - ale sprawny',
      price: 4000,
    },
    {
      id: '3',
      title: 'Smartfon33',
      imgUrl: 'https://picsum.photos/id/160/600/600',
      price: 800,
    },
    {
      id: '4',
      title: 'Samochoódzzz',
      imgUrl: 'https://picsum.photos/id/183/600/600',
      description: 'Zabytkowy ogórek',
      price: 1200,
    },
  ]);

  singleAuction: AuctionItem = {
    id: '1',
    title: 'Części do aparatu',
    imgUrl: 'https://picsum.photos/id/36/600/600',
    description: 'Jakiś opis',
    price: 2000,
  };

  // single auction Promise:
  singleActionPromise = Promise.resolve(this.singleAuction);
}
