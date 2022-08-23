import { createAction, props } from '@ngrx/store';
import { Contact } from 'src/app/API.service';

const load = createAction('[Contact] Load');
const loaded = createAction(
  '[Contact] Loaded',
  props<{ contacts: Contact[] }>()
);

const add = createAction('[Contact] Add', props<{ contact: Contact }>());
const added = createAction(
  '[Contact] Added',
  props<{ contact: Contact }>()
);

// const update = createAction(
//   '[Contact] Update',
//   props<{ contact: Contact }>()
// );
// const updated = createAction(
//   '[Contact] Updated',
//   props<{ contacts: Contact[] }>()
// );

// const remove = createAction(
//   '[Contact] Remove',
//   props<{ contact: Contact }>()
// );
// const removed = createAction(
//   '[Contact] Removed',
//   props<{ contacts: Contact[] }>()
// );

export const ContactActions = {
  load,
  loaded,
  add,
  added,
};