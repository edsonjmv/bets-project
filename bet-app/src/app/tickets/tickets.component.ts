import { Component, OnInit, Input, Output } from '@angular/core';
import { TicketService } from '../ticket.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {
  tickets;
  user;
  constructor(private ticket: TicketService, private session: SessionService) { }

  ngOnInit() {
    this.user=this.session.loggedUser;
    this.ticket.getTickets()
      .subscribe((tickets) => {
        this.tickets = tickets;
      });
  }
}
