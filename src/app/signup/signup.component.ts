import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {

    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })

  }

  onSubmit(signupform){
    console.log(signupform.value);
  }

  ngOnInit() {
  }

}
