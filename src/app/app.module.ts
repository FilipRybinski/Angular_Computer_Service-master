import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';

import { DatePipe } from '@angular/common';
import { EmailPipe } from './shared/email.pipe'
import { WycenaPipe } from './shared/wycena.pip';
import { DolarDirective } from './shared/dolar.directive'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    DashboardComponent,
    OrdersComponent,
    ContactComponent,
    EmailPipe,
    WycenaPipe,
    DolarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

