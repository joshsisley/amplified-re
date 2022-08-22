import { TestBed } from "@angular/core/testing";
import { Observable, ReplaySubject } from "rxjs";
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthService } from "../auth.service";
import { AuthEffects } from "./auth.effects";
import { AuthServiceStub } from "src/app/testing/stubs/auth.service.stub";
import { AuthActions } from "./auth.actions";

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions$: Observable<any>;
  let service: AuthService;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useClass: AuthServiceStub,
        },
      ],
    });

    effects = TestBed.inject(AuthEffects);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should getCurrentUser', (done) => {
    const action = AuthActions.loadUser();
    actions$ = new ReplaySubject(1);
    (actions$ as ReplaySubject<any>).next(action);

    effects.loadUser$.subscribe(result => {
      expect(result).toEqual(AuthActions.loadUserSuccess({ 
        user: {
          attributes: {
            email: ''
          }
        }})
      );
      done();
    }).unsubscribe();
  });
});