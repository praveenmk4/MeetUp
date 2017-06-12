import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GroupsListService {

  constructor(private http:Http) { }
   // Get all posts from the API
  getAllGroups(param) {
    return this.http.get('/group/groupList?phone='+param)
      .map(res => res.json());
  }
}
