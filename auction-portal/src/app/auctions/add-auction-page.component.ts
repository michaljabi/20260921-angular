import { Component, computed, inject, signal } from '@angular/core';
import { form, FormRoot, FormField } from '@angular/forms/signals';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './auctions.service';

// Początkowy koncept:
// Pick<AuctionItem, 'title' | 'price'> & { imgId: number; description: string }

// Refactor
interface AuctionModel {
  title: AuctionItem['title'];
  price: AuctionItem['price'];
  description: string;
  imgId: number;
}

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-add-auction-page',
  styles: ``,
  template: `
    <section class="mt-2 row">
      <div class="col-6">
        <img class="img-thumbnail" alt="Podgląd fotografii" [src]="imgUrl()" />
      </div>
      <div class="col-6">
        <form [formRoot]="auctionForm">
          <div class="form-group">
            <label for="auctionTitle">Nazwa aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"> 📝 </span>
              </div>
              <input
                id="auctionTitle"
                type="text"
                class="form-control"
                [formField]="auctionForm.title"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"> 💲 </span>
              </div>
              <input
                id="auctionPrice"
                type="number"
                [formField]="auctionForm.price"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"> 📸 </span>
              </div>
              <input id="img" type="number" [formField]="auctionForm.imgId" class="form-control" />
            </div>
          </div>

          <div class="form-group">
            <label for="auctionDescription">Szczegółowy opis</label>
            <div class="input-group mb-3">
              <textarea
                id="auctionDescription"
                rows="5"
                class="form-control"
                [formField]="auctionForm.description"
              ></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary" type="submit">Dodaj aukcję</button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class AddAuctionPageComponent {
  private readonly initialState = {
    title: '',
    imgId: 1,
    price: 0,
    description: '',
  };

  auctionModel = signal<AuctionModel>(this.initialState);

  imgUrl = computed(() => `https://picsum.photos/id/${this.auctionModel().imgId}/600/600`);

  private readonly auctionsService = inject(AuctionsService);

  auctionForm = form(
    this.auctionModel,
    (schema) => {
      // validate - robimy razem
    },
    {
      submission: {
        action: async () => {
          console.log('aukualna wartość fomularza', this.auctionModel());
          // Zadanie 26:
          // 1. Użyj DI do AuctionsService - i wyślij formularz
          // 2. Używając [formField] - zbierz pozostałe pola formularza
          // 3. Przygotuj poprawny model danych dla metody .addNew()
          // 4. Pokaż na konsoli - ale w (u mnie linii 46 auctions.service.ts)

          //
          // Najłatwiej - używając tzw. destrukturyzacji:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
          const { title, price, description } = this.auctionModel();

          const newAuction: Omit<AuctionItem, 'id'> = {
            title,
            price,
            description,
            imgUrl: this.imgUrl(),
          };

          this.auctionsService.addNew(newAuction);
          // po dodaniu
          this.auctionModel.set(this.initialState);
        },
      },
    },
  );
}
