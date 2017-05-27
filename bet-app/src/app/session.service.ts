import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000/auth';
  users: any;

  loginEvent: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  getLoginEmitter(): EventEmitter<any> {
    return this.loginEvent;
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {}, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, { withCredentials: true })
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/private`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }
}
