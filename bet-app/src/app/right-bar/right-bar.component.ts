import { Component, OnInit, Input } from '@angular/core';

import { TicketService } from '../ticket.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss'],
  providers: [TicketService]
})
export class RightBarComponent implements OnInit {
  @Input() astronaut: string;
  ticket = '';
  subscription: Subscription;

  constructor(private tick: TicketService) {
    this.subscription = tick.oddAnnounced$.subscribe(
      ticket => {
        this.ticket = ticket;
    });
  }

  ngOnInit() {
  }

}
