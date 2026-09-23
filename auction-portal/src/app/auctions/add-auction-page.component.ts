import { Component, computed, inject, signal } from '@angular/core';
import { form, FormRoot, FormField, required, min } from '@angular/forms/signals';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './auctions.service';
import { AlertComponent } from '../shared/alert.component';

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
  imports: [FormRoot, FormField, AlertComponent],
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
            <div class="input-group mb-3 ">
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
            @if (auctionForm.title().touched() && auctionForm.title().invalid()) {
              @for (error of auctionForm.title().errors(); track error) {
                <!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing -->
                <app-alert [text]="error.message ?? ''" type="alert-danger" />
              }
            }
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
            @if (auctionForm.price().touched() && auctionForm.price().invalid()) {
              @for (error of auctionForm.price().errors(); track error) {
                <!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing -->
                <app-alert [text]="error.message ?? ''" type="alert-danger" />
              }
            }
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
            <button
              class="btn btn-primary"
              type="submit"
              [style.opacity]="auctionForm().valid() ? 1 : 0.5"
            >
              Dodaj aukcję
            </button>
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
    (schemaPath) => {
      // validate - robimy razem
      required(schemaPath.title, { message: 'Tytuł aukcji musi być podany' });
      min(schemaPath.price, 0, { message: 'Cena nie może być mniejsza niź 0' });
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

          this.auctionsService.addNew(newAuction).subscribe((newAuction) => {
            console.log('Nowa aukcja to', newAuction)
            // po dodaniu
            this.auctionModel.set(this.initialState);
            this.auctionForm().reset();
          });
        },
      },
    },
  );
}
