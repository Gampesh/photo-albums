import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatCardModule, MatCheckboxModule, MatButtonModule, MatChipsModule } from  '@angular/material';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { AlbumComponent } from './album/album.component';
import { UserComponent } from './user/user.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumService } from './album/album.service';
import { PhotosService } from './photos/photos.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    UserComponent,
    PhotosComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpModule,
  ],
  providers: [UserService, AlbumService, PhotosService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) { }
}
