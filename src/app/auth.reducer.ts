import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './auth.actions';

export const initialState = 0;

const _authReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
