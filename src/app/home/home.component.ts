import { Component, OnInit } from '@angular/core';
import { CoolSessionStorage } from 'angular2-cool-storage';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	user: any = {};
	sessionStorage: CoolSessionStorage;

  constructor(sessionStorage: CoolSessionStorage,public router: Router) {
        this.sessionStorage = sessionStorage;   
    }

  ngOnInit() {
	  let loggedUser = this.sessionStorage.getItem('user');
	  if (loggedUser) {
		this.user = JSON.parse(loggedUser);
	  } else {
		  this.user = null;
	  }
  }
  
 questionTypes = [
    {'id':1,'type':'Descriptive'   },
    {'id':2,'type':'Select One'   },
    {'id':3,'type':'Select Many'   }
    ];
     selectedValue = "";
  onChange(newValue:any){
     console.log(newValue);
    this.selectedValue = newValue;
  }
  clicked(){
  alert('Button Cliked');
}

logout(){
	  if(this.user){
		  this.sessionStorage.removeItem('user');
		  this.router.navigate(['']);
	  }
  }
}
