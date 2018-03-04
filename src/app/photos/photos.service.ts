import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {

  constructor (private http: Http) {}

  public getPhotosForAlbums(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
      map(res => res.json()));
  }
}
