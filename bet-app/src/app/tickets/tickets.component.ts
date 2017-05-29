import { Component, OnInit, Input, Output } from '@angular/core';
import { TicketService } from '../ticket.service';
import { SessionService } from '../session.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {
  tickets;
  user;
  constructor(private ticket: TicketService, private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.user=this.session.loggedUser;

    if (this.user === undefined) {
      this.router.navigate(['/login']);
    }

    this.ticket.getTickets()
      .subscribe((tickets) => {
        this.tickets = tickets;
      });
  }
}
