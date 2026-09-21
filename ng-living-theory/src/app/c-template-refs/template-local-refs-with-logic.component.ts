import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-template-local-refs-with-logic',
  template: `
    <header class="subtitle is-family-monospace">template-local-refs-with-logic</header>
    <div>
      <label>
        Test:
        <input class="input" #testInput />
        <!-- Tutaj robimy to samo co w app-template-local-references z tym że po stronie logiki do widoku -->
      </label>
      <button class="button mt-2" (click)="handleButtonClick()">Ustaw focus na input</button>
    </div>
  `,
})
export class TemplateLocalRefsWithLogicComponent {
  // Aby odczytać referencję do natywnego elementu z widoku, potrzebujemy sygnał:
  // Jako locator w viewChild wpisujemy nazwę ref z #
  protected readonly testInputRef = viewChild<ElementRef>('testInput');

  handleButtonClick(): void {
    // Dostęp do natywnego elementu jest po przez odniesienie:
    this.testInputRef()?.nativeElement?.focus();
  }
}
