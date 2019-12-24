import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() selected = '';
  @Input() items = [];

  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
