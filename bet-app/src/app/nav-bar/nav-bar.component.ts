import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../session.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  error: any;
  loggedUser: any;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(
      user => this.loggedUser = user);
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
    this.loggedUser = null;
  }

  successCb(user) {
    this.loggedUser = user;
    this.error = null;
  }

}
