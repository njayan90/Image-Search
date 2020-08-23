import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToFavourites } from '../store/images/images.actions';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() data;
  constructor(private store : Store<{images:{}}>) { }

  ngOnInit() { }

  addToFavourites(data){
    this.store.dispatch(AddToFavourites({payload : data}));
  }
}
