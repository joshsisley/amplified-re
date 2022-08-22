import { createReducer, Action, on } from '@ngrx/store';
import { Auth } from 'aws-amplify';
import { Contact } from 'src/app/API.service';
import { ContactActions } from './contact.actions';

export const contactFeatureKey = 'Contact';

export interface State {
  contacts: Contact[];
}

export interface ContactAppState {
  [contactFeatureKey]: State;
}

export const initialState: State = {
  contacts: []
};

const ContactReducer = createReducer<State>(
  initialState,
  on(ContactActions.loaded, (state, { contacts }) => ({
    ...state,
    contacts
  })),
  on(ContactActions.added, (state, { contacts }) => ({
    ...state,
    contacts
  })),
  // on(ContactActions.updated, (state, { contacts }) => ({
  //   ...state,
  //   contacts
  // })),
  // on(ContactActions.removed, (state, { contacts }) => ({
  //   ...state,
  //   contacts
  // }))
);

export function reducer(state: State | undefined, action: Action) {
  return ContactReducer(state, action);
}