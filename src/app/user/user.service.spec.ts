import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserService } from './user.service';

describe('User Service', () => {

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
        UserService,
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

    unit = TestBed.get(UserService);
    backend = TestBed.get(MockBackend);
  });

  it('should be able to call getUserDetails', async(() => {
    let unitGetUserList = unit.getUserDetails();
    let userListServiceSubscription = (unitGetUserList.subscribe((response) => {
      expect(response).toEqual({ success: false });
    }));
    userListServiceSubscription.unsubscribe();
  }));

});
