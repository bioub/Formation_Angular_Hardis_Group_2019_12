import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  now$: Observable<Date>;

  constructor() { }

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
  }

  // now = new Date();
  // private intervalId;

  // constructor() { }

  // ngOnInit() {
  //   this.intervalId = setInterval(() => {
  //     this.now = new Date();
  //   }, 1000);
  // }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }

}
