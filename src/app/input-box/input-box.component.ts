import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  searchImage(searchWord){
    this.dataService.searchData(searchWord).subscribe(data => {
      this.dataService.search.next(data);
    })
  }

}
