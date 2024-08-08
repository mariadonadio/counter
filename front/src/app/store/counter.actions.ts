import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Container] Increment');
export const decrement = createAction('[Counter Container] Decrement');
export const reset = createAction('[Counter Container] Reset');