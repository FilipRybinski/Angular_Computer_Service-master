import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders_show: boolean = false;
  form_show: boolean = false;
  contact_show: boolean = false;
  type_user: boolean = false;
  constructor(private _router: Router) {
  }
  ngOnInit(): void {
    let tmp = localStorage.getItem('userType');
    tmp == "client" ? this.type_user = false : this.type_user = true;
    console.log(this.type_user)

  }
  show() {
    if (this.orders_show === false) {
      this.orders_show = true;
      this.form_show = false;
      this.contact_show = false;
    } else {
      this.orders_show = false;
    }
  }
  show2() {
    if (this.form_show === false) {
      this.form_show = true;
      this.orders_show = false;
      this.contact_show = false;
    } else {
      this.form_show = false;
    }
  }
  show3() {
    if (this.contact_show === false) {
      this.contact_show = true;
      this.orders_show = false;
      this.form_show = false;
    } else {
      this.contact_show = false;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('email');
  }
}
