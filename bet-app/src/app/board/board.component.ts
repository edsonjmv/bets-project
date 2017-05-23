import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [OddService, TicketService]
})
export class BoardComponent implements OnInit {
  odds;
  ticket: string[] = [];
  nextOdd = 0;

  constructor(private odd: OddService, private tick: TicketService) { }

  ngOnInit() {
    this.odd.getOdds()
      .subscribe((odds) => {
        this.odds = odds;
      });
  }

  announce() {
    let odd = this.odds[this.nextOdd++];
    this.tick.announceOdd(odd);
    this.ticket.push(`Odd "${odd}" announced`);
    if (this.nextOdd >= this.odds.length) { this.nextOdd = 0; }
  }

}
