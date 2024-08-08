import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from './counter.actions';

@Injectable({ providedIn: 'root' })

export class CounterFacade {
    #store = inject(Store);

    get CounterState$() : Observable<number> {
        return this.#store.select('count');
    }

    increment() {
        this.#store.dispatch(increment());
    }


    decrement() {
        this.#store.dispatch(decrement());
    }

    reset() {
        this.#store.dispatch(reset());
    }
}