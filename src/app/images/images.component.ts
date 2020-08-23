import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { BeginGetImages } from '../store/images/images.actions';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imageData : any;
  constructor(private store : Store<{images: {images : []}}>) {} 

  ngOnInit() {
   this.store.dispatch(BeginGetImages());
   this.store.select(state => state).subscribe(resp => {
      this.imageData = resp.images.images
    });
  }

}
