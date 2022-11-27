import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  userType: boolean = false;
  constructor(private _http: HttpClient, private _route: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    })
  }
  logindata() {
    this._http.get<UserType[]>("http://localhost:3000/singup")
      .subscribe(res => {
        const user = res.find((a: UserType) => {
          a.type == 'client' ? this.userType = false : this.userType = true;
          return a.email === this.login.value.email && a.password === this.login.value.password
        });

        if (user) {
          alert('You are successfully login');
          localStorage.setItem('token', '5QvJ6Taggymns8a2LPvn')
          localStorage.setItem('email', this.login.value.email)
          this.userType === true ? localStorage.setItem('userType', 'admin') : localStorage.setItem('userType', 'client');
          this.login.reset();
          this._route.navigate(['dashboard']);
        } else {
          alert('User Not Found');
          this._route.navigate(['login']);
        }
      }, err => {
        alert('Something went wrong');
      })
  }
}
