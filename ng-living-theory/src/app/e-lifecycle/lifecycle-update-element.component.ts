import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-update-element',
  // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <header class="subtitle is-family-monospace">lifecycle-update-element</header>
    <div>Sekretny kod to: {{ secretCode() }}</div>
  `,
})
export class LifecycleUpdateElementComponent
  implements DoCheck, OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  secretCode = input('');
  previousSecretCode = '';
  order = 0;

  constructor() {
    this.logOrder('constructor');
  }

  logOrder(eventName: string): void {
    console.log(`[${this.order++}.]`, eventName, '!');
  }

  ngOnInit(): void {
    this.logOrder('ngOnInit');
  }

  ngDoCheck(): void {
    this.logOrder('ngDoCheck');
    console.log(this.previousSecretCode, '->', this.secretCode());
  }

  ngAfterViewInit(): void {
    this.logOrder('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logOrder('ngAfterViewChecked');
    this.previousSecretCode = this.secretCode();
  }

  ngOnDestroy(): void {
    this.logOrder('ngOnDestroy');
  }
}
