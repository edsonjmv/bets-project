import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from "lodash";

@Injectable()
export class OddService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getLeagues() {
    return this.http.get(`${this.BASE_URL}/odds`)
      .map((res) => res.json().data);
  }

  getNBA() {
    return this.http.get(`${this.BASE_URL}/odds/nba`)
      .map((res) => res.json().data.events);
  }

  getMLB() {
    return this.http.get(`${this.BASE_URL}/odds/mlb`)
      .map((res) => res.json().data.events);
  }

  getSerieA() {
    return this.http.get(`${this.BASE_URL}/odds/serie-a`)
      .map((res) => res.json().data.events);
  }
}
