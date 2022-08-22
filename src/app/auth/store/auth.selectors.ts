import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, State } from './auth.reducer';

const selectAuthState = createFeatureSelector<State>(authFeatureKey);

const selectCurrentUser = createSelector(selectAuthState, (state: State) => state.user);
const selectUserLoaded = createSelector(selectAuthState, (state: State) => state.userLoaded);

export const fromAuth = {
  selectCurrentUser,
  selectUserLoaded,
};