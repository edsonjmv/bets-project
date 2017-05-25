import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TicketService {
  handleError: any;
  BASE_URL: string = 'http://localhost:3000';

  // private oddAnnouncedSource = new Subject<string>();
  //
  // oddAnnounced$ = this.oddAnnouncedSource.asObservable();
  //
  // announceOdd(odd: string) {
  //   this.oddAnnouncedSource.next(odd);
  // }

  constructor(private http: Http) { }
  makeBet(betForm){
    return this.http.post(`${this.BASE_URL}/ticket`, betForm)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
