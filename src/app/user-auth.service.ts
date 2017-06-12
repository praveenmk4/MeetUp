import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAuthService {
	
	loginUrl = 'http://localhost:3002/db/login';
	registerUrl = 'http://localhost:3002/db/register';

  constructor(private http: Http) { }

  registerUser (user: User): Observable<User> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.registerUrl, { user }, options)
             .map(this.extractData)
             .catch(this.handleError);
}

	authenticateUser (user: User): Observable<User> {
		console.log(user);
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	return this.http.post(this.loginUrl, { user }, options)
             .map(this.extractData)
             .catch(this.handleError);
		
}

  
  private extractData(res: Response) {
    let body = res.json();
	console.log(body);
    return body.data || { };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
