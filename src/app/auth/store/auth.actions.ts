import { createAction, props } from '@ngrx/store';

const loadUser = createAction(
  '[Auth] Load User',
);

const loadUserSuccess = createAction(
  '[Auth] Load User Success',
  props<{ user: any }>()
)

const signOutUser = createAction(
  '[Auth] Sign Out User',
);

const signOutUserSuccess = createAction(
  '[Auth] Sign Out User Success',
);

export const AuthActions = {
  loadUser,
  loadUserSuccess,
  signOutUser,
  signOutUserSuccess,
};