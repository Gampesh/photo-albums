import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';

import { PhotosService } from './photos.service';

describe('Photo Service', () => {

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
        PhotosService,
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

    unit = TestBed.get(PhotosService);
    backend = TestBed.get(MockBackend);
  });

  it('should be able to call getPhotosForAlbums', async(() => {
    let unitGetPhotoList = unit.getPhotosForAlbums();
    let photosListServiceSubscription = (unitGetPhotoList.subscribe(response => {
      expect(response).toEqual({ success: true });
    }));
    photosListServiceSubscription.unsubscribe();
  }));

});
