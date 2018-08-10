import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fruits: string[] = ["Plum"];

  constructor() { 

    this.fruits.push("Apples");
    this.fruits.push("Oranges");
    this.fruits.push("Grapes");
    this.fruits.push("Bananas");
    this.fruits.push("Grapes");
    this.fruits.push("Melons");

    console.log(this.fruits)

  }
  
  ngOnInit() {
  }

}
