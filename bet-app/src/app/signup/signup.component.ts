import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  privateData: any = 'Privado';

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
      );
  }

  logout() {
    this.session.logout()
      .subscribe(
      () => this.successCb(null),
      (err) => this.errorCb(err)
      );
  }

  getPrivateData() {
    this.session.getPrivateData()
      .subscribe(
      (data) => this.privateData = data,
      (err) => this.error = err
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
