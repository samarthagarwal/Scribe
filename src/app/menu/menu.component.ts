import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  people: any[] = [{
    "name": "Bob",
    "age": 28,
    "country": "AU"
  }, {
    "name": "Alice",
    "age": 26,
    "country": "US"
  }, {
    "name": "Sherlock",
    "age": 41,
    "country": "UK"
  }, {
    "name": "John",
    "age": 35,
    "country": "IN"
  }, {
    "name": "Noddy",
    "age": 45,
    "country": "GE"
  }]

  constructor() { 

  }
  
  ngOnInit() {
  }

}
