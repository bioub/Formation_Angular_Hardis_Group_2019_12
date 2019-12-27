import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { delay, switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<any>;

  user = {
    name: "Jean Dupont",
    email: "jd@gmail.com",
    phone: "06 00 00 00 00"
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user$ = this.activatedRoute.params
      .pipe(
        switchMap(params =>
          this.userService.getById(params.id)
        )
      );
      // .subscribe(user => {
      //   this.user = user;
      // });

    // this.activatedRoute.params.subscribe(params => {
    //   const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
    //   this.httpClient
    //     .get<any>(url)
    //     .pipe(delay(params.id == 3 ? 3000 : 0))
    //     .subscribe(user => {
    //       this.user = user;
    //     });
    // });
  }
}
