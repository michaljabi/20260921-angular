import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-data-from-server-side',
  template: `
    <h2>Pobieranie danych z z serwera API</h2>
    <h3 class="subtitle is-family-monospace">data-from-server-side</h3>
    <div>
      <p>
        Będziemy pobierać dane z serwera API. W tym celu użyjemy
        <code>provideHttpClient()</code> w konfiguracji aplikacji. Dzięki temu będziemy mogli
        korzystać z serwisu <code>HttpClient</code> umożliwiającego komunikację z serwerem API.
      </p>
      <p></p>
      <div class="panel is-link mt-6">
        <p class="panel-heading">Pobrani użytkownicy</p>
        @for (user of user$ | async; track user.id) {
          <div class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            {{ user.name }} ({{ user.email }})
          </div>
        } @empty {
          <div class="panel-block">Brak użytkowników</div>
        }
      </div>
    </div>
  `,
  imports: [AsyncPipe],
  styles: ``,
})
export class DataFromServerSideComponent {
  // Korzystamy z Dependency Injection, aby uzyskać instancję UsersService.
  // Tutaj pokazane jest inne podejście do wstrzykiwania zależności, używając `inject` zamiast konstruktora.
  private readonly usersService = inject(UsersService);

  user$ = this.usersService.getUsers();
}
