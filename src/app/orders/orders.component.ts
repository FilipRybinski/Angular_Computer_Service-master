import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { registrationModel } from '../shared/registration.model';
import { ApiService } from '../shared/api.service';
import { Order, OrderType } from '../shared/order.model'
import { delay, elementAt } from 'rxjs';
declare var window: any; ///DO FORMULARZY 
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {
  editedorderid!: number;
  formModal: any;///DO FORMULARZY 
  formModal2: any; ///DO FORMULARZY 
  formModal3: any; ///DO FORMULARZY 
  RegistrationformValue!: FormGroup;
  Update!: FormGroup;
  Update2!: FormGroup;
  RegistrationModelObj!: registrationModel;
  RegistrationModelObj_to_Update!: registrationModel;
  registrationData: registrationModel[] = []; ///obiekt zgloszenia
  Orderr!: Order;
  OrdersData: Order[] = []; /// array of zgloszenie
  date: string = new Date().toISOString().split("T")[0]; /// formularz data
  @Input()
  type_user!: boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {

  }
  ngOnInit(): void {
    this.RegistrationformValue = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: [localStorage.getItem('email'), Validators.required],
      model_type: ['', Validators.required],
      des_of_problem: ['', Validators.required],
      des_of_demage: ['', Validators.required]
    });
    this.Update = this.formBuilder.group({

      status: ['', Validators.required]
    })
    this.Update2 = this.formBuilder.group({

      status2: ['', Validators.required],
      status3: ['', Validators.required]
    })
    this.formModal = new window.bootstrap.Modal(document.getElementById("exampleModalCenter"));
    this.formModal2 = new window.bootstrap.Modal(document.getElementById("exampleModalCenter2"));
    this.formModal3 = new window.bootstrap.Modal(document.getElementById("exampleModalCenter3"));
    this.getAllRegistration();
    this.getAllOrder();
  }
  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
  postRegistration() {
    let id: number;
    this.registrationData.length === 0 || NaN ? id = 1 : id = this.registrationData[this.registrationData.length - 1].get_id + 1;
    this.api.postRegistration(new registrationModel(id, this.RegistrationformValue.value.fname, this.RegistrationformValue.value.lname, this.RegistrationformValue.value.email, this.RegistrationformValue.value.model_type, this.RegistrationformValue.value.des_of_problem, this.RegistrationformValue.value.des_of_demage)).subscribe(res => {
      alert("Registration send successfully!")
    }, err => {
      alert("Something went wrong!")
    })
    this.formModal.hide();
    this.RegistrationformValue.reset();
    this.RegistrationformValue.patchValue({ email: localStorage.getItem('email') });
    this.getAllRegistration();

  }
  getAllRegistration() {
    this.api.getRegistration().subscribe(res => {
      this.registrationData = res;
    })
  }
  deleteRegistration(id: Order) {
    this.api.deleteRegistration(id.get_id).subscribe(res => {
      alert("Order deleted");
      this.getAllOrder();
    })
  }
  getAllOrder() {
    this.api.getOrder().subscribe(res => {
      this.OrdersData = res;
    })
  }
  openModal() {
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }
  openModal2(id: number) {
    this.formModal2.show();
    this.editedorderid = id;
    console.log(this.editedorderid);
    console.log(this.OrdersData);
  }
  closeModal2() {
    console.log(this.OrdersData);
    this.formModal2.hide();
  }
  UpdateStatus() {
    if (this.Update.controls['status'].value === "Zakończony") {
      this.OrdersData.find((element: Order) => {
        if (element.get_id === this.editedorderid) {
          this.Orderr = new Order(element.get_id, element.get_accept_date, element.get_description, true, element.get_email, element.get_wycena, element.get_date_collect);
        }
      })
      this.api.updateRegistration(this.Orderr, this.Orderr.get_id).subscribe(res => {
        alert("Change to na zakonczony");
        this.formModal2.hide();
        this.getAllOrder();
      })
    } else {
      this.OrdersData.find((element: Order) => {
        if (element.get_id === this.editedorderid) {
          this.Orderr = new Order(element.get_id, element.get_accept_date, element.get_description, false, element.get_email, element.get_wycena, element.get_date_collect);
        }
      })
      this.api.updateRegistration(this.Orderr, this.Orderr.get_id).subscribe(res => {
        alert("Change to w toku");
        this.formModal2.hide();
        this.getAllOrder();
      })
    }
  }
  deleteRegistration_form_Client(id: registrationModel) {
    this.api.deleteRegistration_form_client(id.get_id).subscribe(res => {
      alert("Registration deleted");
      this.getAllRegistration();
    })
  }
  openModal3(object: registrationModel) {
    this.formModal3.show();
    this.RegistrationModelObj_to_Update = object;
  }
  closeModal3() {
    this.formModal3.hide();
  }
  move_form_registration_to_order() {
    let id: number;
    this.OrdersData.length === 0 || NaN ? id = 1 : id = this.OrdersData[this.OrdersData.length - 1].get_id + 1;
    this.api.postRegistrationOrder(new Order(id, new Date(), this.RegistrationModelObj_to_Update.get_des_of_problem, false, this.RegistrationModelObj_to_Update.get_email, this.Update2.value.status2, this.Update2.value.status3)).subscribe(res => {
      alert("Accept successfully!")
      this.deleteRegistration_form_Client(this.RegistrationModelObj_to_Update);
      this.getAllRegistration();
      this.sleep(2000);
      this.getAllOrder();
      this.closeModal3();
    })
  }
}
