import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  firstName: string = "Internshala";
  lastName: string = "Trainings";

  number1: number = 10;
  number2: number = 15;
  
  constructor() { }

  ngOnInit() {
  }

}
