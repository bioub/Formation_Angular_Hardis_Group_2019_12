import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  add = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<any>(
      "https://jsonplaceholder.typicode.com/users"
    );
  }

  getById(id) {
    return this.httpClient.get<any>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
  }

  create(user) {
    return this.httpClient
      .post("https://jsonplaceholder.typicode.com/users", user)
      .pipe(tap(user => this.add.emit(user)));
  }
}
