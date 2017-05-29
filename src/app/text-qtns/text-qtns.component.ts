import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-qtns',
  templateUrl: './text-qtns.component.html',
  styleUrls: ['./text-qtns.component.css']
})
export class TextQtnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
txtQtn:string;
questionType:number;
SaveTextQtn(){
     
  //  console.log(this.txtQtn);
    var finalQtnDetails = {
        'question':this.txtQtn,
        'questionType':1
    }
    console.log(finalQtnDetails);
    this.txtQtn ="";
}
}
