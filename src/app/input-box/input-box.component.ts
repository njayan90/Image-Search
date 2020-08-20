import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Store} from '@ngrx/store';
import { BeginSearchImages } from '../store/images/images.actions';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  constructor(private dataService : DataService , private store : Store<{images: any}>) { }

  ngOnInit() {
  }

  searchImage(searchWord){
    this.store.dispatch(BeginSearchImages({payload : searchWord}));
  }

}
