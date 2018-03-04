import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { MatTableModule } from '@angular/material';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { UserComponent } from './user.component';
import { UserService } from './user.service';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: any;
  let backend: MockBackend;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj('UserService', ['getUserDetails']);
    userService.getUserDetails.and.returnValue({subscribe: callback => callback([{'name': 'test', 'email': 'test', 'address': 'test'}])});
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useValue: userService },
        ConnectionBackend,
        MockBackend,
        Http
      ],
      imports: [ MatTableModule, HttpModule ],
    })
    .compileComponents();
    backend = TestBed.get(MockBackend);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
