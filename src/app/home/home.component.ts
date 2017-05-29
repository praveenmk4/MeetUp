import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
