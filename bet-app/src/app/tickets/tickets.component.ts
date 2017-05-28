import { Component, OnInit, Input, Output } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {
  tickets;
  constructor(private ticket: TicketService) { }

  ngOnInit() {
    this.ticket.getTickets()
      .subscribe((tickets) => {
        this.tickets = tickets;
      });
  }
}
