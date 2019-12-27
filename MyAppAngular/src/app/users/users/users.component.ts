import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXhrBackend, XhrFactory } from "@angular/common/http";

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
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // Envoyer une requete HTTP :
    // GET https://jsonplaceholder.typicode.com/users
    // const xhrFactory = new XhrFactory()
    // const handler = new HttpXhrBackend(xhrFactory);
    // const httpClient = new HttpClient(handler);
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.users = users;
    });
  }

}
