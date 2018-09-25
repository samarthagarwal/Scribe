import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  signup(email: string, password: string){
    
    return firebase.auth().createUserWithEmailAndPassword(email, password)

  }

}
