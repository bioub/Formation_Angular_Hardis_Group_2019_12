import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.userService.create(this.user)
      .subscribe((newUser) => {
        this.router.navigate(['users']);
      });
  }
}
