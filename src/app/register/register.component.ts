import { Component, OnInit } from '@angular/core';
import { RegisterModel }    from './register';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new RegisterModel('','','','',0);
  submitted = false;
  onSubmit() { this.submitted = true;
	console.log(this.model)}
}
