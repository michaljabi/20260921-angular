import { httpResource } from '@angular/common/http';
import { computed, Service, Signal } from '@angular/core';
import { AuctionItem } from './auction-item';

//  stateless / statefull serwisy (prowadzący info)
@Service() // === dawniej: @Injectable({ providedIn: 'root' })
export class AuctionsService {
  private baseURL = `http://localhost:3000`;

  auctions = httpResource<AuctionItem[]>(() => `${this.baseURL}/auctions`);

  // Na bazie jednego Signal można robić własny tzw. COMPUTED.
  count: Signal<number> = computed(() => (this.auctions.hasValue() ? this.auctions.value().length : 0));

  reloadAuctions() {
    this.auctions.reload();
  }
}
