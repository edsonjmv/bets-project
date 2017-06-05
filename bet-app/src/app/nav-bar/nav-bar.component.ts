import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../session.service';
import { TicketService } from '../ticket.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  error: any;
  user;
  money: any;

  constructor(private session: SessionService, private ticket: TicketService) {}

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(
      user => this.user = user);
    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
          }
       );
  }

  logout() {
    this.session.logout()
      .subscribe(
      () => this.successCb(null),
      (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
