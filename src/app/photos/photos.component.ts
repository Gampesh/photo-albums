import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoOfAlbum1: any = [];
  photoOfAlbum2: any = [];
  albumIds: any;
  repeat: boolean = true;
  photos: any = [];
  albumSequence: string = 'first';

  constructor(private route: ActivatedRoute, private photosService: PhotosService) {

    let albumIds = this.route.snapshot.paramMap.get('id');
    this.albumIds = JSON.parse(albumIds);

    this.photosService.getPhotosForAlbums().subscribe((res) => {
      res.json().map((photo) => {
        this.managePhotosOfAlbum(photo);
       });
    });
    this.rotateAlbums();
    this.photos = this.photoOfAlbum1;
  }

  private rotateAlbums() {
    console.log(typeof this.albumIds[1] != "undefined");
    console.log(this.albumIds[1]);
    if(typeof this.albumIds[1] != 'undefined') {
      Observable.interval(20 * 1000).subscribe(() => {
        if(this.repeat) {
          this.photos = this.photoOfAlbum2;
          this.repeat = false;
          this.albumSequence = 'second';
        } else {
          this.photos = this.photoOfAlbum1;
          this.repeat = true;
          this.albumSequence = 'first';
        }
      });
    }
  }
  private managePhotosOfAlbum(photo: any) {
    if(photo.albumId == this.albumIds[0]) {
      this.photoOfAlbum1.push(photo);
    }
    if(this.albumIds[1] != 'undefined'  && photo.albumId == this.albumIds[1]) {
      this.photoOfAlbum2.push(photo);
    }
  }

  ngOnInit() {

  }
}
