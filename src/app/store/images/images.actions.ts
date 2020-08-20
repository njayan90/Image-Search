import { createAction, props } from '@ngrx/store';

export const GetImages = createAction('[Images Component] - Get Images');
export const BeginGetImages = createAction('[Images Component] - Begin Get Images');
export const SuccessGetImages = createAction(
  '[Images Component] - Success Get Images',
  props<{ payload: [] }>()
);

export const GetSearchImages = createAction('[Input Component] - Get Search Images');
export const BeginSearchImages = createAction('[Input Component] - Begin Search Images' ,
props<{ payload: '' }>());
export const SuccessSearchImages = createAction(
  '[Input Component] - Success Search Images',
  props<{ payload: [] }>()
);
export const ErrorGetImages = createAction('[Images Component] - Error', props<Error>());