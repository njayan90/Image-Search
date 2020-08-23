import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetFavourites } from '../store/images/images.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites = [];
  constructor(private store : Store<{images : {favourites : []}}>) { }

  ngOnInit() {
    this.store.dispatch(GetFavourites());
    this.store.select(state => state).subscribe(data => {
      this.favourites = data.images.favourites;
      console.log(this.favourites);
    })
  }

}
