import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AlbumService {

  constructor (private http: Http) {

  }

  public getUserAlbumList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
