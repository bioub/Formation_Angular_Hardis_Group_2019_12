import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name = 'Romain';
  completed = false;

  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   this.name = Array.from(this.name).reverse().join('');
    // }, 1000);
  }

}
