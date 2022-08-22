import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap, concatMap } from 'rxjs/operators';
import { AuthActions } from './auth.actions';
import { AuthService } from '../auth.service';
  
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private service: AuthService
  ) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadUser),
    concatMap(() => this.service.getCurrentUser()),
    map(user => AuthActions.loadUserSuccess({ user }))
  ));

  signOutUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signOutUser),
    concatMap(() => this.service.signOut()),
    map(() => AuthActions.signOutUserSuccess())
  ));
}