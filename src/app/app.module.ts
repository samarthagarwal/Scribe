import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';

let config = {
  apiKey: "AIzaSyDyT_uO9pFs3nDvJWDGH78z14Rkz8G-Je4",
  authDomain: "scribe-d63dd.firebaseapp.com",
  databaseURL: "https://scribe-d63dd.firebaseio.com",
  projectId: "scribe-d63dd",
  storageBucket: "scribe-d63dd.appspot.com",
  messagingSenderId: "236969302096"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
