import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { messageModel, messageModelType } from '../shared/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }
  RegistrationformValue!: FormGroup;
  messageData: messageModel[] = [];
  @Input()
  type_user!: boolean;
  ngOnInit(): void {
    this.RegistrationformValue = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: [localStorage.getItem('email'), Validators.required],
      message: ['', Validators.required]
    });
    this.getMessage();
  }
  postMessage() {
    let id: number;
    this.messageData.length === 0 || NaN ? id = 1 : id = this.messageData[this.messageData.length - 1].get_id + 1;
    this.api.postMessage(new messageModel(id, this.RegistrationformValue.value.fname, this.RegistrationformValue.value.lname, this.RegistrationformValue.value.email, this.RegistrationformValue.value.message)).subscribe(res => {
      alert("Send successfully!")
      this.RegistrationformValue.reset();
      this.RegistrationformValue.patchValue({ email: localStorage.getItem('email') });
      this.getMessage();
    }, err => {
      alert("Something went wrong!")
    })

  }
  getMessage() {
    this.api.getMessage().subscribe(res => {
      this.messageData = res;
    })
  }
  deleteMessage(object: messageModel) {
    this.api.deleteMessage(object.get_id).subscribe(res => {
      alert("Order deleted");
      this.getMessage();
    })
  }
}
