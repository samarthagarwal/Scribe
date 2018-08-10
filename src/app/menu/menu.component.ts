import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string = "Internshala";

  showGoogleButton: boolean = false;
  
  constructor() { }

  toggleGoogleButton(){
    this.showGoogleButton = !this.showGoogleButton;
  }

  shouldDisplay(){
    if(this.name == "Internshala"){
      return true;
    } else {
      return false;
    }
  }
  
  ngOnInit() {
  }

}
