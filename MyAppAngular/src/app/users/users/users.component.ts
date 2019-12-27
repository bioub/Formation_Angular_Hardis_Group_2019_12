import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXhrBackend, XhrFactory } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    // {
    //   id: 123,
    //   name: 'Bill Gates',
    // },
    // {
    //   id: 456,
    //   name: 'Steve Jobs',
    // }
  ]

  // private httpClient: HttpClient;
  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }
  constructor(private userService: UserService) {}

  ngOnInit() {
    // Envoyer une requete HTTP :
    // GET https://jsonplaceholder.typicode.com/users
    // const xhrFactory = new XhrFactory()
    // const handler = new HttpXhrBackend(xhrFactory);
    // const httpClient = new HttpClient(handler);
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });

    this.userService.add.subscribe((user) => {
      this.users.push(user);
    })
  }

}
