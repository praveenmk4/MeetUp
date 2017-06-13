import { Component, OnInit } from '@angular/core';
import{ GroupsListService} from '../groups-list.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import { CoolSessionStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any = []; 
  mobile:number =  12354466;
  user: any = {};
  sessionStorage: CoolSessionStorage;
  
  
  constructor(private groupService: GroupsListService,public dialog: MdDialog, sessionStorage: CoolSessionStorage) { 
  this.sessionStorage = sessionStorage;   }

  ngOnInit() {
      // Retrieve posts from the API
    this.groupService .getAllGroups(this.mobile).subscribe(groups => {
      this.groups = groups;
    
      JSON.stringify(this.groups);
    });
	
	let loggedUser = this.sessionStorage.getItem('user');
	  if (loggedUser) {
		this.user = JSON.parse(loggedUser);
	  } else {
		  this.user = null;
	  }
    
  }

  //open function 
   openDialog(name) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
    console.log(name);
    });
  }

}



@Component({
  selector: 'dialog-result-example-dialog',
  template: `<h1 md-dialog-title>Dialog</h1>
<div md-dialog-content>What would you like to do?</div>
<div md-dialog-actions>
  <button md-button md-dialog-close="Option 1">Option 1</button>
  <button md-button md-dialog-close="Option 2">Option 2</button>
</div>
`,
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
