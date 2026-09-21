import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  template: `
    <h2>Obsługa formularza</h2>
    <header class="subtitle is-family-monospace">reactive-driven-form</header>
    <!-- kluczową rolę sprawuje tutaj opakowanie formularza w ngForm i wysłanie go przez handleFormSubmit -->
    <form [formGroup]="sampleForm" (ngSubmit)="handleFormSubmit()" (input)="errorMessage = ''">
      <fieldset class="field">
        <label>
          Name:
          <input class="input" formControlName="name" />
        </label>
      </fieldset>
      <fieldset class="field">
        <label>
          Post:
          <textarea class="textarea" formControlName="post"></textarea>
        </label>
        @if (post?.invalid && post?.touched) {
          <p class="help is-danger">
            {{
              post?.hasError('minlength') &&
                'to pole powinno mieć min.' + post?.getError('minlength').requiredLength + ' znaków'
            }}
          </p>
        }
      </fieldset>
      <fieldset style="text-align: right">
        <button class="button is-primary" type="submit">Wyślij formularz</button>
      </fieldset>
      @if (errorMessage) {
        <div class="notification is-danger mt-3">
          {{ errorMessage }}
        </div>
      }
    </form>
  `,
  styles: [
    `
      input.ng-touched.ng-invalid,
      textarea.ng-touched.ng-invalid {
        border: 3px solid #f14668;
      }
    `,
  ],
})
export class ReactiveDrivenFormComponent {
  private fb = inject(FormBuilder);

  sampleForm = this.fb.group({
    name: ['', Validators.required],
    post: new FormControl('', [Validators.minLength(20)]),
  });
  errorMessage = '';

  handleFormSubmit(): void {
    const { sampleForm } = this;
    console.log('Formularz', sampleForm);
    const value = sampleForm.value;

    if (sampleForm.invalid) {
      // Wywołanie "dotknięcia" wszystkich pól, aby pokazać błędy
      sampleForm.markAllAsTouched();
      this.errorMessage = 'Popraw błędy w formularzu !';
      return;
    }

    alert(JSON.stringify(value));
    sampleForm.reset();
  }

  // upraszczamy walidację:
  get post() {
    return this.sampleForm.get('post');
  }
}
