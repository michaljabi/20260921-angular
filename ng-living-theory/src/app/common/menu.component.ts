import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuLink {
  link: string;
  label: string;
  html?: string;
}

interface MenuSection {
  part: string;
  title: string;
  items: MenuLink[];
}

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  template: `
    <nav class="menu column">
      @for (section of sections; track section.part) {
        <p class="menu-label">
          {{ section.part }} - <strong>{{ section.title }}</strong>
        </p>
        <ul class="menu-list">
          @for (item of section.items; track item.link) {
            <li>
              @if (item.html) {
                <a [routerLink]="item.link" [innerHTML]="item.html"></a>
              } @else {
                <a [routerLink]="item.link"> {{ item.label }} </a>
              }
            </li>
          }
        </ul>
      }
    </nav>
  `,
})
export class MenuComponent {
  readonly sections: MenuSection[] = [
    {
      part: 'Część 0',
      title: 'Rozgrzewka',
      items: [{ link: '/all-in-one', label: 'Wszystko w jednym' }],
    },
    {
      part: 'Część A',
      title: 'Podstawy',
      items: [
        { link: '/sample', label: 'Przykład wygenerowanego komponentu' },
        { link: '/data-binding', label: 'Bindowanie danych' },
        { link: '/hermetic-style', label: 'Hermetyczność stylu' },
        { link: '/basic-directives', label: 'Dyrektywy w template' },
        { link: '/for-of-loop', label: 'Pętla For-Of w template' },
        { link: '/methods', label: 'Metody' },
      ],
    },
    {
      part: 'Część B',
      title: 'Komunikacja',
      items: [
        { link: '/parent-child', label: 'Relacja parent - child' },
        { link: '/long-distance', label: 'Daleka odległość...' },
        { link: '/server-side', label: 'Dane z serwera API' },
      ],
    },
    {
      part: 'Część C',
      title: 'Pipes i refs',
      items: [
        { link: '/pipes', label: 'Pipes na template' },
        { link: '/template-ref', label: 'Ref na widoku' },
        { link: '/template-ref-in-logic', label: 'Ref w logice komponentu' },
      ],
    },
    {
      part: 'Część D',
      title: 'Formularze',
      items: [
        { link: '/signal-forms', label: '🆕 Signal driven forms' },
        { link: '/forms', label: 'Template driven forms' },
        { link: '/reactive-forms', label: 'Reactive driven forms' },
      ],
    },
    {
      part: 'Część E',
      title: 'Cykl życia',
      items: [{ link: '/lifecycle', label: 'Metody lifecycle' }],
    },
    {
      part: 'Część F',
      title: 'Testowanie',
      items: [{ link: '/to-test', label: 'Komponent poddany testom (podgląd)' }],
    },
    {
      part: 'Część G [dodatek]',
      title: 'Sygnały',
      items: [
        {
          link: '/signals-basics',
          label: 'signals zamiast zone.js',
          html: '<em>signals</em> zamiast <em>zone.js</em>',
        },
        { link: '/signal-computed', label: 'Stan wyliczany' },
        { link: '/signal-effect', label: 'Efekty uboczne' },
        { link: '/signal-store', label: 'Signal store' },
      ],
    },
  ];
}
