import { computed, Injectable, signal } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  // Tutaj informujemy Angular'a, że ten serwis ma być dostępny dla Injector'a, dla całej aplikacji!
  providedIn: 'root',
})
export class VegetableService {
  #vegetables = signal(['lettuce', 'tomato', 'cucumber']);
  // odcinamy mu możliwość edycji
  vegetables = this.#vegetables.asReadonly();

  // możemy też na bazie instinctive utworzyć sygnał, który będzie liczył ilość warzyw:
  numberOfVegetables = computed(() => this.#vegetables().length);

  // metoda do dodawania elementu do naszej listy warzyw:
  add(veggie: string): void {
    // Zaktualizuj sygnał o nowe warzywo:
    this.#vegetables.update((vegetables) => [...vegetables, veggie]);
  }
}

/*
Dla porównania wersja RXJS:

export class VegetableService {
  // specjalny Subject, który potrafi jednocześnie odbierać i wysyłać dane:
  private vegetablesSubject = new BehaviorSubject([
    'lettuce',
    'tomato',
    'cucumber',
  ]);
  // odcinamy mu możliwość emisji (.next()) aby bezpiecznie go zwrócić w getAll()
  private vegetable$ = this.vegetablesSubject.asObservable();

  // metoda do dodawania elementu do naszej listy warzyw:
  add(veggie: string): void {
    // Odczytaj statycznie z Subjectu aktualną wartość:
    const vegetables: string[] = this.vegetablesSubject.getValue();
    // Dopisz do niej nowe warzywo:
    vegetables.push(veggie);
    // Rozgłoś wszystkim zainteresowanym — zmiany
    this.vegetablesSubject.next(vegetables);
  }

  getAll(): Observable<string[]> {
    return this.vegetable$;
  }
}
*/

// Powyżej nie ma tak na prawdę, rocket science — poza tym, że robimy to na podstawie Observables !
// DLA PORÓWNANIA, zobacz: ... może inaczej — klasycznie
// Zrobilibyśmy to tak:
/*
export class VegetableService {

   private vegetables = ['lettuce', 'tomato', 'cucumber'];

   add(veggie: string): void {
     this.vegetables.push(veggie);
   }

   getAll(): string[] {
     return this.vegetables;
   }
}
*/
