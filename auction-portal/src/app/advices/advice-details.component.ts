import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [JsonPipe, AsyncPipe],
  selector: 'app-advice-details',
  styles: ``,
  template: `
    Kliknięto id:
    <pre>{{ activatedRoute.snapshot.params | json }}</pre>
    <pre>{{ activatedRoute.params | async | json }}</pre>
  `,
})
export class AdviceDetailsComponent {
  activatedRoute = inject(ActivatedRoute);
}
