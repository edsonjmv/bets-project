import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from "lodash";
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';


@Injectable()
export class OddService {
  BASE_URL:string = environment.baseurl;

  constructor(private http: Http) { }

  getLeagues() {
    return this.http.get(`${this.BASE_URL}/leagues`)
      .map((res) => {
        return res.json()
      });
  }

  getOdds(id) {
    return this.http.get(`${this.BASE_URL}/odds?leagueId=${id}`)
      .map((res) => {
        return res.json()
      });
  }

  getAllOdds() {
    return this.http.get(`${this.BASE_URL}/odds/all`)
      .map((res) => {
        return res.json()
      });
  }

  createOdd(data) {
    return this.http.post(`${this.BASE_URL}/odds`, data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/odds/${id}`)
      .map((res) => res.json());
  }

  getSingleOdd(id) {
    return this.http.get(`${this.BASE_URL}/odds/${id}`)
      .map((res) => res.json());
  }

  edit(odd, data) {
    return this.http.put(`${this.BASE_URL}/odds/${odd._id}`, data)
      .map((res) => res.json());
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  oddClick() {
    console.log('click');
  }
}
