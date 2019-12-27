import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user = {
    name: 'Jean Dupont',
    email: 'jd@gmail.com',
    phone: '06 00 00 00 00'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
      this.httpClient.get<any>(url).subscribe((user) => {
        this.user = user;
      });
    });
  }

}
