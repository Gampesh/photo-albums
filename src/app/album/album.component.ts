import {Component, OnChanges, OnInit} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatButtonModule, MatChip } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { AlbumService } from './album.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumDetail: any;
  displayedColumns = ['select', 'album'];
  selection = new SelectionModel<any>(true, []);
  constructor(private albumService: AlbumService, private activatedRoute: ActivatedRoute, private route: Router) {
    let userId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.albumService.getUserAlbumList().subscribe((res) => {
      let albums = res.json().filter((album) => album.userId == userId);
      this.albumDetail = new MatTableDataSource(albums);
    });
  }
  albumId: any;

  ngOnInit() {

  }

  selectedAlbumId() {
    this.albumId = [];
    this.albumDetail.data.forEach(row => {
      this.selection.isSelected(row) ? this.albumId.push(row.id) : '';

    });
    let albumIds = JSON.stringify(this.albumId);
    this.route.navigate(['photo/album', albumIds]);
  }

  //
  // /** Whether the number of selected elements matches the total number of rows. */
  // manageSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.albumDetail.data.length;
  //   return numSelected === numRows;
  // }
}
