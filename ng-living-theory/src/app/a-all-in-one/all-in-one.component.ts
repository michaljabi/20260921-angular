import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-all-in-one',
  imports: [UpperCasePipe],
  template: `
    <section>
      <h3 class="is-3">All in one</h3>
      <div class="message is-info">
        <div class="message-body">
          Ten komponent posiada wszystkie "podstawowe" zabawki, które potrzebujemy, żeby zarządzać
          <code> template </code>.
          <p>
            Korzystamy już z nowości na rok <code>2025</code>. Takich jak
            <code>signals()</code> oraz <code>control flow (@)</code>
          </p>
        </div>
      </div>
      <div class="box content">
        <p>
          1. Na widoku możemy coś pokazać bezpośrednio to obliczając inline:
          <code>{{ 3 + 3 + 6 * 3 }}</code>
        </p>
        <p>
          2. Można wrzucić tutaj dowolną wartość, jednak w znakach
          <code>{{'{{}}'}}</code> jednak finalnie, cokolwiek wrzucimy będzie finalnie poddane:
          <code>.toString()</code> -> zobacz: <code>{{ {} }}</code> lub <code>{{ [1, 2, 3] }}</code>
        </p>
        <p>
          3. Możemy używać tzw. <em>Control Flow</em>.
          @for (x of [1, 2, 3, 4, 5]; track x) {
            <strong>{{ x }}_</strong>,
          }
          żeby manipulować widokiem.
        </p>
        <p>
          4. Dowolna wartość która NIE jest <code>private</code> w logice, może być zaprezentowana
          na widoku: <em>{{ sampleValue }}</em>
        </p>
        <p>
          5. Dowolna wartość z widoku, zanim zostanie pokazana na widoku może być zmodyfikowana (ale
          tylko na tym widoku) dzięki tzw.
          <code>pipe</code>, zobacz:
          <em>{{ sampleValue | uppercase }}</em>
        </p>
        <p>
          @let unwrap = counter();
          6. Poniżej zaprezentowane są sygnały {{ unwrap }} - które są używane dla elementów
          "zmieniających się w czasie". Można je rozpakować: {{ unwrap }}, używając
          <code>{{ '@let' }}</code> (zmienna lokalna), co jest przydatne jeśli używamy tego w kilku
          miejscach na widoku.
        </p>
      </div>
      <div class="is-display-flex is-gap-2 is-justify-content-center is-align-items-center">
        <button class="button is-primary" (click)="handleUpdateCount(-1)">-</button>
        <span class="title is-3 mt-4"> {{ counter() }} </span>
        <button class="button is-warning" (click)="handleUpdateCount(1)">+</button>
        <button class="button is-danger" (click)="counter.set(0)">Ustaw 0</button>
      </div>
      @if (counter() > 0) {
        <div
          class="has-background-primary-light"
          [style]="{
            width: '200px',
            height: '200px',
            marginLeft: doubleCounterPx(),
          }"
        ></div>
      }
    </section>
  `,
  styles: ``,
})
export class AllInOneComponent implements OnInit, OnDestroy {
  // Potrzebne nam do "cleanup" po usunięciu komponentu
  private timerId?: number;

  // Wartości opakowane "signals" to takie, które można traktować jako STAN danych, czyli dane, zmieniające sie w czasie
  protected readonly counter = signal(0);
  protected readonly doubleCounterPx = computed(() => this.counter() * 2 + 'px');
  protected sampleValue = 'Wartość'; // Ta wartość nie zmienia się w czasie...

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.timerId = setTimeout(() => {
      this.counter.update((c) => c + 200);
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  handleUpdateCount(value: number) {
    this.counter.update((c) => c + value);
  }
}
