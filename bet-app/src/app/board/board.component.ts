import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { TicketService } from '../ticket.service';
import * as _ from "lodash";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [OddService, TicketService]
})
export class BoardComponent implements OnInit {
  odds;
  betChoosen: any[] = [];

  constructor(private odd: OddService, private tick: TicketService) { }
  ngOnInit() {
    this.odd.getOdds()
      .subscribe((odds) => {
        this.odds = odds;
      });
  }

  addOdd(choose) {
    this.betChoosen.push(choose);
    this.betChoosen = _.clone(this.betChoosen);
  }


}
