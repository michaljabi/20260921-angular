import { Component, computed, signal } from '@angular/core';
import { form, FormRoot, FormField } from '@angular/forms/signals';

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
              <input id="auctionPrice" type="number" name="price" class="form-control" />
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
                name="description"
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
  auctionModel = signal({
    title: '',
    imgId: 1,
  });

  imgUrl = computed(() => `https://picsum.photos/id/${this.auctionModel().imgId}/600/600`);

  auctionForm = form(this.auctionModel, () => {}, {
    submission: {
      action: async (field) => {
        console.log('aukualna wartość fomularza', this.auctionModel());
      },
    },
  });
}
