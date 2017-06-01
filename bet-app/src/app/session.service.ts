import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000/auth';
  loggedUser: any;

  loginEvent = new EventEmitter<any>();

  constructor(private http: Http) { }

  getLoginEmitter() {
    return this.loginEvent;
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user, { withCredentials: true })
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, { withCredentials: true })
      .map(res => {
        this.loginEvent.emit(res.json());
        return res => res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {}, { withCredentials: true })
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, { withCredentials: true })
    .map(res => res.json())
    .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/private`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  editCashier(user, data) {
    return this.http.put(`http://localhost:3000/user/${user._id}`, data)
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  getAllUser() {
    return this.http.get(`http://localhost:3000/user/all`)
      .map((res) => {
        return res.json()
      });
  }

  removeSingleUser(id) {
    return this.http.delete(`http://localhost:3000/user/${id}`)
      .map((res) => res.json());
  }

}
