import { Component, OnInit } from '@angular/core';
import{ DummyService } from '../dummy.service';
import{ ParticipantsService} from '../participants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   users: any = [];   
  constructor(private participantService: ParticipantsService  ) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.participantService .getAllUsers().subscribe(users => {
      this.users = users;
     // console.log('users',users);
      JSON.stringify(this.users);
    });
  }

}
