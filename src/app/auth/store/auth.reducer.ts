import { createReducer, Action, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'Auth';

export interface State {
  user: any;
  userLoaded: boolean;
}

export interface AuthAppState {
  [authFeatureKey]: State;
}

export const initialState: State = {
  user: null,
  userLoaded: false,
};

const AuthReducer = createReducer<State>(
  initialState,
  on(AuthActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    userLoaded: true,
    user
  })),
  on(AuthActions.signOutUserSuccess, state => ({
    ...state,
    userLoaded: false,
    user: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return AuthReducer(state, action);
}