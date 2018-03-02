import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor (private http: Http) {

  }

  public getUserDetails(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
