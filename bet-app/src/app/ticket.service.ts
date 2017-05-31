import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TicketService {
  handleError: any;
  BASE_URL: string = 'http://localhost:3000';

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
