import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;

  constructor() {
    this.user = {
      firstname: 'Stefan',
      lastname: 'Martinek',
      email: 'stefan.martinek@gmail.com'
    }
  }
}
