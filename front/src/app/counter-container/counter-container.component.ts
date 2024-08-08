import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { NumberDisplayComponent } from '../number-display/number-display.component';
import { Observable } from 'rxjs';
import { CounterFacade } from '../store/counterFacade';


@Component({
  selector: 'app-counter-container',
  standalone: true,
  imports: [CommonModule,ButtonComponent,NumberDisplayComponent],
  templateUrl: './counter-container.component.html',
  styleUrl: './counter-container.component.css',
})
export class CounterContainerComponent {
  public count$: Observable<number>;
  #facade = inject(CounterFacade);

  constructor() {
    this.count$ = this.#facade.CounterState$;
  }

  increment() {
    this.#facade.increment();
  }

  decrement() {
    this.#facade.decrement();
  }

  reset() {
    this.#facade.reset();
  }
}
