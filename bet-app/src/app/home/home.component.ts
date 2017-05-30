import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user;
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = this.session.loggedUser;
  }

}
