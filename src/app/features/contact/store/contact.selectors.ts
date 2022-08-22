import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contact } from 'src/app/API.service';
import { contactFeatureKey, State } from './contact.reducer';

const selectContactState = createFeatureSelector<State>(contactFeatureKey);

const selectAll = createSelector(
  selectContactState,
  (state) => state.contacts
);

const selectById = (id: string) =>
  createSelector(selectAll, (state: Contact[]) =>
    state.find((p) => p.id === id)
  );

export const fromContact = {
  selectAll,
  selectById,
};