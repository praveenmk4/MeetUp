import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ParticipantsService {

  constructor(private http:Http) { }
   // Get all posts from the API
  getAllUsers() {
    return this.http.get('/api/participants')
      .map(res => res.json());
  }
}
