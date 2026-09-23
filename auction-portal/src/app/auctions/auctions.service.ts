import { httpResource } from '@angular/common/http';
import { computed, Service, Signal } from '@angular/core';
import { AuctionItem } from './auction-item';

//  stateless / statefull serwisy (prowadzący info)
@Service() // === dawniej: @Injectable({ providedIn: 'root' })
export class AuctionsService {
  private baseURL = `http://localhost:3000`;

  private auctions = httpResource<AuctionItem[]>(() => `${this.baseURL}/auctions`);

  allAuctions = computed(() => {
    if (this.auctions.hasValue()) {
      return this.auctions.value();
    }
    return [];
  });
  areAuctionsLoading = computed(() => this.auctions.isLoading());
  error = computed(() => this.auctions.error());

  // Na bazie jednego Signal można robić własny tzw. COMPUTED.
  count: Signal<number> = computed(() =>
    this.auctions.hasValue() ? this.auctions.value().length : 0,
  );

  reloadAuctions() {
    this.auctions.reload();
  }

  addNew(auction: Omit<AuctionItem, 'id'>) {
    // addNew(auction: AuctionItem) {
    console.log('Tutaj TODO, wysylka POST na Rest API', auction)
    // auction.id
  }
}
