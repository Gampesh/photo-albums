import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { MatChipsModule, MatCardModule} from '@angular/material';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { PhotosService } from './photos.service';
import { PhotosComponent } from './photos.component';
import { ActivatedRoute } from '@angular/router';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  let photoService: any;
  let backend: MockBackend;

  beforeEach(async(() => {
    photoService = jasmine.createSpyObj('PhotosService', ['getPhotosForAlbums']);
    photoService.getPhotosForAlbums.and.returnValue({subscribe: callback => callback([''])});
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      providers: [
        { provide: PhotosService, useValue: photoService },
        { provide: ActivatedRoute, useValue: {snapshot: { paramMap:  { get(id: string) {return 1;}},},} },
        ConnectionBackend,
        MockBackend,
        Http
      ],
      imports: [ MatChipsModule, MatCardModule, HttpModule ],
    })
    .compileComponents();
    backend = TestBed.get(MockBackend);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
