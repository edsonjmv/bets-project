import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class TicketService {
  // Observable string sources
  private oddAnnouncedSource = new Subject<string>();
  // private oddConfirmedSource = new Subject<string>();
  // Observable string streams
  oddAnnounced$ = this.oddAnnouncedSource.asObservable();
  // oddConfirmed$ = this.oddConfirmedSource.asObservable();
  // Service message commands
  announceOdd(odd: string) {
    this.oddAnnouncedSource.next(odd);
  }
  // confirmOdd(astronaut: string) {
  //   this.oddConfirmedSource.next(astronaut);
  // }
  constructor() { }

}
