import { createReducer, on } from '@ngrx/store';
import { getImages } from './images.actions';
 
export const initialState = [];
 
const _ImagesReducer = createReducer(initialState,
  on(getImages, state => state),
);
 
export function ImagesReducer(state, action) {
  return _ImagesReducer(state, action);
}