import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export const initialState = false;

const _authReducer = createReducer(initialState,
  on(login, () => true),
  on(logout, () => false),
);

export const authReducer = (state, action) => {
  return _authReducer(state, action);
}
