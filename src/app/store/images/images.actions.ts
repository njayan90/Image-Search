import { createAction, props } from '@ngrx/store';

export const getImages = createAction('[Images Component] Get Images');
export const ImageLoadSuccess = createAction('[Images Component] Success Load Images' , props<{images : any[]}>())