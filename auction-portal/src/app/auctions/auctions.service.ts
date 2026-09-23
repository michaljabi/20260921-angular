import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Service, Signal } from '@angular/core';
import { AuctionItem } from './auction-item';
import { environment } from '../../environments/environment';

// SSoT -> Single Source of Truth
// koncepcja w programowaniu gdzie dany "moduł" / "klasa" / "obiekt" - jest
// tzw. jedynym źródłem prawdy - czyli odpowiada w całości za dostarczenie API / Logiki
// do obsługi czegoś

// ten serwis będzie źródłem prawdy (stanu serwerowego)
// na temat Aukcji.

//  stateless / statefull serwisy (prowadzący info)

// jeśli poza tym dekoratorem @Service - nie będzie klasa AuctionsService występowała
// w jakiekolwiek innej "tablicy providerów" - to będzie tylko jedna instancja tej klasy na CAŁA APLIKACJE!. (Singleton)
@Service() // === dawniej: @Injectable({ providedIn: 'root' })
export class AuctionsService {
  private baseURL = environment.baseURL;

  private auctions = httpResource<AuctionItem[]>(() => `${this.baseURL}/auctions`);

  private httpClient = inject(HttpClient);

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
    console.log('Tutaj TODO, wysylka POST na Rest API', auction);
    // auction.id
    return this.httpClient.post<AuctionItem>(`${this.baseURL}/auctions`, auction);
  }
}
