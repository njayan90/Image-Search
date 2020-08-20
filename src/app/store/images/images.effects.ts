import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/services/data.service';
import { getImages, ImageLoadSuccess } from './images.actions';
import {switchMap, map, catchError, tap} from 'rxjs/operators'
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesEffects{

    constructor(private actions$ : Actions , private dataService : DataService){

    }
    loadImages$ = createEffect(() => this.actions$.pipe(
        ofType(ImageLoadSuccess) ,
        switchMap(() => this.dataService.fetchData().pipe(tap(resp=>console.log(resp)),
            map((images : any) => ImageLoadSuccess({images})) , 
            catchError(() => EMPTY)))))
}