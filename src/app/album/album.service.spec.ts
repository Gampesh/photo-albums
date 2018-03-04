import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AlbumService } from './album.service';

describe('Album Service', () => {

  let backend: MockBackend;
  let unit: any;
  let router: any;
  class MockRouter   {
    url: string = 'album';
  }
  beforeEach(function () {
    router = new MockRouter();
    TestBed.configureTestingModule({
      providers: [
        AlbumService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: Router, useValue: router },
      ]
    }).compileComponents();

    unit = TestBed.get(AlbumService);
    backend = TestBed.get(MockBackend);
  });

  it('should be able to call getUserAlbumList', async(() => {
    let unitGetUserAlbumList = unit.getUserAlbumList();
    let userAlbumListServiceSubscription = (unitGetUserAlbumList.subscribe(response => {
      expect(response).toEqual({ success: true });
    }));
    userAlbumListServiceSubscription.unsubscribe();
  }));

});
