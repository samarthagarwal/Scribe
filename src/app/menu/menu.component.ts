import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  disabledMyButton: boolean = false;
  google: string = "https://www.google.com"
  logo: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  
  constructor() { }

  ngOnInit() {
  }

}
