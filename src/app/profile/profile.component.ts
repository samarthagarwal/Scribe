import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { 

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

  }

  ngOnInit() {
  }

}
