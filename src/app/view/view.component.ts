import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: any = {};
  postId: string = "";

  constructor(public activateRoute: ActivatedRoute, public ngZone: NgZone) {

    let postId = this.activateRoute.snapshot.paramMap.get("postId");

    this.postId = postId;

    firebase.firestore().settings({
      timestampsInSnapshots: true
    })

    firebase.firestore().collection("posts").doc(postId).get().then((docSnapshot) => {

      this.ngZone.run(() => {
        this.post = docSnapshot.data();
        console.log(this.post);
      })

      
    })

  }

  ngOnInit() {
  }

}
