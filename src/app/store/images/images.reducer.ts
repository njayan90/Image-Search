import { Action, createReducer, on } from '@ngrx/store';
import * as ImageActions from './images.actions';

const initialState = [];

const reducer = createReducer(
  initialState,
  on(ImageActions.GetImages, state => state),
  on(ImageActions.SuccessGetImages, (state: any, { payload }) => {
    return { ...state, images: payload, error: null };
  }),
  on(ImageActions.GetSearchImages, state => state),
  on(ImageActions.SuccessSearchImages, (state: any, { payload }) => {
    return { ...state, images: payload, error: null };
  }),
);

export function ImagesReducer(
  state: [] | undefined,
  action: Action
): [] {
  return reducer(state, action);
}