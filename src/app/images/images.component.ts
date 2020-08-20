import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Store} from '@ngrx/store';
import { getImages } from '../store/images/images.actions';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imageData : any;
  constructor(private dataService : DataService , private store : Store<{images : any[]}>) { }

  ngOnInit() {
    this.store.dispatch(getImages());
    this.store.select(state => state).subscribe(resp => {
      console.log(resp)
      this.imageData = resp.images
    });
    // this.dataService.fetchData().subscribe(data => {
    //   this.imageData = data
    // })
    // this.dataService.search.subscribe((data:any) => {
    //   this.imageData = data.results
    // })
  }

}
