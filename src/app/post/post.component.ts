import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: any;

  postData: any = {};
  user: any = {};

  constructor() { }

  ngOnInit() {
    this.postData = this.post.data();
    this.user = firebase.auth().currentUser;
  }

}
