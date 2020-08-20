import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ImageActions from './images.actions';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class ImageEffects {
  constructor(private dataService: DataService, private action$: Actions) {}

  getImages$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ImageActions.BeginGetImages),
      mergeMap(action =>
        this.dataService.fetchData().pipe(
          map((data: []) => {
            return ImageActions.SuccessGetImages({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ImageActions.ErrorGetImages(error));
          })
        )
      )
    )
  );

  searchImage$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ImageActions.BeginSearchImages),
      mergeMap(action =>
        this.dataService.searchData(action.payload).pipe(
          map((data: any) => {
            return ImageActions.SuccessGetImages({ payload: data.results });
          }),
          catchError((error: Error) => {
            return of(ImageActions.ErrorGetImages(error));
          })
        )
      )
    )
  );
}