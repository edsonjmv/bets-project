import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../environments/environment';

@Injectable()
export class TicketService {
  handleError: any;
  BASE_URL:string = environment.baseurl;
  cashierEvent = new EventEmitter<any>();

  constructor(private http: Http) { }
  makeBet(betForm) {
    return this.http.post(`${this.BASE_URL}/ticket`, betForm, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTickets() {
    return this.http.get(`${this.BASE_URL}/ticket`, {withCredentials: true})
      .map((res) => {
        return res.json()
      });
  }


  }
