import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

@Injectable()
export class SessionService {
  BASE_URL:string = environment.baseurl;
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
    return this.http.post(`${this.BASE_URL}/auth/signup`, user, { withCredentials: true })
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/auth/login`, user, { withCredentials: true })
      .map(res => {
        this.loginEvent.emit(res.json());
        return res => res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/auth/logout`, {}, { withCredentials: true })
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/auth/loggedin`, { withCredentials: true })
    .map(res => res.json())
    .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/auth/private`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  editCashier(user, data) {
    return this.http.put(`${this.BASE_URL}/user/${user._id}`, data)
    .map(res => {
      this.loginEvent.emit(res.json());
      return res => res.json();
    })
    .catch(this.handleError);
  }

  updatingCashierAdm(user, data) {
    return this.http.put(`${this.BASE_URL}/user/${user._id}`, data)
    .map(res => {
      return res.json();
    })
    .catch(this.handleError);
  }

  getAllUser() {
    return this.http.get(`${this.BASE_URL}/user/all`)
      .map((res) => {
        return res.json()
      });
  }

  removeSingleUser(id) {
    return this.http.delete(`${this.BASE_URL}/user/${id}`)
      .map((res) => res.json());
  }

}
