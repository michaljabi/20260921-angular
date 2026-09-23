import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { AuctionItem } from './auction-item';

//  stateless / statefull serwisy (prowadzący info)
@Service() // === dawniej: @Injectable({ providedIn: 'root' })
export class AuctionsService {

    auctions = httpResource<AuctionItem[]>(() => 'http://localhost:3000/auctions');

    
}
