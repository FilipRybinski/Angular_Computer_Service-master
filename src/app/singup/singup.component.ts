import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from '../shared/user.model'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  singup!: FormGroup;
  constructor(private _route: Router, private _http: HttpClient, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.singup = this.formBuilder.group({
      'fname': ['', Validators.required],
      "lname": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "phone": ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(9)]],
      "password": ['', [Validators.required,Validators.minLength(8)]],
      "type": ['client']


    })
  }
  singupdata() {
    console.log(this.singup.value)
    this._http.post<User>("http://localhost:3000/singup", new User(this.singup.value.fname, this.singup.value.lname, this.singup.value.email, this.singup.value.phone, this.singup.value.password, this.singup.value.type))
      .subscribe(res => {
        alert('Singup successfull');
        this.singup.reset();
        this._route.navigate(['login']);
      }, err => {
        alert('Somthing went wrong');
      })

  }
}
