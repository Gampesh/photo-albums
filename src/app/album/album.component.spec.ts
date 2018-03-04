import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { MatTableModule, MatButtonModule, MatChipsModule, MatCheckboxModule } from '@angular/material';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AlbumService } from './album.service';
import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let albumService: any;
  let backend: MockBackend;
  let mockRouter: any;

  class MockRouter   {
    url: string = 'album';
  }
  beforeEach(async(() => {
    mockRouter = new MockRouter();
    albumService = jasmine.createSpyObj('AlbumService', ['getUserAlbumList']);
    albumService.getUserAlbumList.and.returnValue({subscribe: callback => callback([''])});
    TestBed.configureTestingModule({
      declarations: [ AlbumComponent ],
      providers: [
        { provide: AlbumService, useValue: albumService },
        { provide: ActivatedRoute, useValue: {snapshot: { paramMap:  { get(id: string) {return 1;}},},} },
        { provide: Router, useValue: mockRouter },
        ConnectionBackend,
        MockBackend,
        Http
      ],
      imports: [MatTableModule, HttpModule, MatButtonModule, MatChipsModule, MatCheckboxModule],
    })
    .compileComponents();
    backend = TestBed.get(MockBackend);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
