import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [JsonPipe, AsyncPipe],
  selector: 'app-auctions-page',
  styles: ``,
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div>
        {{ singleAuction | json }}
      </div>
      <div>
        <!-- jak działają pipes jedna po durigej (faktyczny pipeline) -->
        {{ singleActionPromise | async | json }}
      </div>
      <div class="row">
        @for (no of [1, 2, 3, 4, 5, 6, 7]; track no) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">[aukcja {{ no }}]</div>
        }
      </div>
    </section>
  `,
})
export class AuctionsPageComponent {
  singleAuction = {
    id: '1',
    title: 'Części do aparatu',
    imgUrl: 'https://picsum.photos/id/36/600/600',
    description: 'Jakiś opis',
    price: 2000,
  };

  // single auction Promise:
  singleActionPromise = Promise.resolve(this.singleAuction);
}
