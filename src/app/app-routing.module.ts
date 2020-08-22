import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {path : '' , component : ImagesComponent},
  {path : 'favourites' , component : FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
