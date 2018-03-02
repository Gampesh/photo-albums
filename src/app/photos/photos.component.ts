import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private photosService: PhotosService) {

    let albumIds = this.route.snapshot.paramMap.get('id');
    this.albumIds = JSON.parse(albumIds);

    this.photosService.getPhotosForAlbums().subscribe((res) => {
      res.json().map((photo) => {
        this.managePhotosOfAlbum(photo);
       });
      console.log(this.photoOfAlbum1);
      console.log(this.photoOfAlbum2);
    });
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
