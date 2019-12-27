import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.httpClient.post('https://jsonplaceholder.typicode.com/users', this.user)
      .subscribe((newUser) => {
        this.router.navigate(['users']);
      });
  }
}
