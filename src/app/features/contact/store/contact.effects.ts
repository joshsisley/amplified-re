import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap, concatMap } from 'rxjs/operators';
import { ContactActions } from './contact.actions';
import { Router } from '@angular/router';
import { Contact } from 'src/app/API.service';
import { ContactService } from '../contact.service';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private service: ContactService
  ) {}

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.load),
      switchMap(() => this.service.listContacts()),
      map(contacts => ContactActions.loaded({ contacts }))
    )
  );

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.add),
      concatMap(({ contact }) =>
        this.service.addContact(contact)
      ),
      map(contacts => ContactActions.added({ contacts }))
    )
  );

  // updateContact$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ContactActions.update),
  //     concatMap(({ contact }) =>
  //       this.http.put<Contact[]>(this.baseUrl, contact)
  //     ),
  //     map(contacts => ContactActions.updated({ contacts })),
  //     tap(() => this.router.navigateByUrl('/contact'))
  //   )
  // );

  // removeContact$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ContactActions.remove),
  //     concatMap(({ contact }) =>
  //       this.http.delete<Contact[]>(`${this.baseUrl}/${contact.id}`)
  //     ),
  //     map(contacts => ContactActions.removed({ contacts })),
  //     tap(() => this.router.navigateByUrl('/contact'))
  //   )
  // );
}