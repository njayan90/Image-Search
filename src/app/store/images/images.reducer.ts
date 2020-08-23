import { Action, createReducer, on } from '@ngrx/store';
import * as ImageActions from './images.actions';

const initialState = {
  favourites : {},
  images : []
};

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
  on(ImageActions.AddToFavourites, (state : any , {payload}) => {
    if(Object.keys(state.favourites).includes(payload.listName)){
      let newList = [...state.favourites[payload.listName] , payload.imageData]
      return {...state , favourites : {...state.favourites , [payload.listName] : newList}}
      
    }
    else{
      let newFav = {...state.favourites , [payload.listName] : [payload.imageData]}
      return {...state , favourites : newFav}
    }
  }),
  on(ImageActions.GetFavourites , state => state)
);
export function ImagesReducer(
  state: [] | undefined,
  action: Action
): [] {
  return reducer(state, action);
}