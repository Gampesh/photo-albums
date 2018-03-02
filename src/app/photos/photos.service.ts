import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PhotosService {

  constructor (private http: Http) {}

  public getPhotosForAlbums(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
