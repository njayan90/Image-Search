import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {ImagesReducer} from './store/images/images.reducer'
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from './store/images/images.effects';
import { FavouritesComponent } from './favourites/favourites.component';
@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    ImagesComponent,
    ImageComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({images : ImagesReducer}),
    EffectsModule.forRoot([ImageEffects])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
