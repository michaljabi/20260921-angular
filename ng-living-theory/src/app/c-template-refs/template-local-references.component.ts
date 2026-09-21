import { Component } from '@angular/core';

@Component({
  selector: 'app-template-local-references',
  template: `
    <header class="subtitle is-family-monospace">template-local-references</header>
    <div>
      <label>
        Test:
        <input class="input" #testInput />
        <!--
            po takim zapisie z hash: # mamy dostęp do lokalnej referencji natywnego elementu DOM.
            co za tym idzie - posiadamy wszystkie natywne metody takie jak testInput.value
            albo
            testInput.focus();
            -->
      </label>
      <button class="button mt-2" (click)="testInput.focus()">Ustaw focus na input</button>
    </div>
  `,
})
export class TemplateLocalReferencesComponent {}
