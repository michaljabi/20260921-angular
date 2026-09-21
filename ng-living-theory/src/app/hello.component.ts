import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h3 class="subtitle is-family-monospace">hello</h3>
    <section class="message is-info">
      <div class="message-body">
        Wybierz interesujący Cię temat z menu po lewej. Zauważ tytuł
        <code>h3</code> w każdym komponencie, sygnalizuje jaki to komponent np. tutaj jesteś w
        <code>hello</code>
      </div>
    </section>
    <div class="notification">
      Po wybraniu linka z lewej, tutaj zostanie osadzony odpowiadający tej ścieżce - komponent.
      Szczegóły znajdziesz w plikach:
      <code>app-routing.module.ts</code> oraz <code>app.component.ts</code>
    </div>
  `,
})
export class HelloComponent {}
