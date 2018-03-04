import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['name', 'email', 'address'];
  userDetail: any;
  constructor(private userService: UserService) {
    this.userService.getUserDetails().subscribe((res) => {
      this.userDetail = new MatTableDataSource(res);
    })
  }
  ngOnInit() {}
}

