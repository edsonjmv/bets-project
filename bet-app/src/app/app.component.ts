import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  user;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = this.session.loggedUser;
  }

}
