import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedName = 'Jean';
  names = ['Romain', 'Jean', 'Eric'];
}
