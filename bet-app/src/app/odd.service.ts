import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from "lodash";

@Injectable()
export class OddService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getLeagues() {
    return this.http.get(`${this.BASE_URL}/leagues`)
      .map((res) => {
        return res.json()
      });
  }

  getOdds() {
    return this.http.get(`${this.BASE_URL}/odds`)
      .map((res) => {
        return res.json()
      });
  }

  oddClick() {
    console.log('click');
  }
}
