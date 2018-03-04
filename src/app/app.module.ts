import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppMaterialModules } from './material.module';

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
    AppMaterialModules,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [UserService, AlbumService, PhotosService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) { }
}
