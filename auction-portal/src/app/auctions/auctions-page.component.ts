import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-auctions-page',
  styles: ``,
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div class="row">
        @for(no of [1,2,3,4,5,6,7]; track no) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">[aukcja {{no}}]</div>
        }
      </div>
    </section>
  `,
})
export class AuctionsPageComponent {}
