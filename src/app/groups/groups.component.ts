import { Component, OnInit } from '@angular/core';
import{ GroupsListService} from '../groups-list.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any = []; 
  constructor(private groupService: GroupsListService) { }

  ngOnInit() {
      // Retrieve posts from the API
  /*  this.groupService .getAllGroups().subscribe(groups => {
      this.groups = groups;
    
      JSON.stringify(this.groups);
    });*/
  }

}
