import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = 'hSwxfEaPYFC9E98kKc8WAquICcHRRLSISiWuqVeX2zw';
  baseUrl = 'https://api.unsplash.com/';
  search = new Subject();
  constructor(private http : HttpClient) { }

  fetchData(){
    return this.http.get(`${this.baseUrl}photos/?client_id=${this.apiKey}`)
  }

  searchData(searchWord){
    return this.http.get(`${this.baseUrl}search/photos/?client_id=${this.apiKey}&query=${searchWord}`)
  }
}
