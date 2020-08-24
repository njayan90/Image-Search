import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { BeginGetImages, AddToFavourites } from '../store/images/images.actions';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imageData : any;
  selectedImage : {} = {};
  listName : string = '';
  constructor(private store : Store<{images: {images : []}}>) {} 

  ngOnInit() {
   this.store.dispatch(BeginGetImages());
   this.store.select(state => state).subscribe(resp => {
      this.imageData = resp.images.images
    });
  }
 
  setData(data){
    this.selectedImage = data;
    console.log(this.selectedImage)
  }
  addToFavourites(){
    console.log(this.selectedImage)
     if(this.listName!== ''){
     this.store.dispatch(AddToFavourites({payload : {listName : this.listName.toLowerCase() , imageData : this.selectedImage}}));
    }
  }
}
