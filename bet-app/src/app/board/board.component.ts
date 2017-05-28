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
  leagueId = {
    id: 0
  }
  leagues;
  allOdd;

  constructor(private odd: OddService, private tick: TicketService) { }

  ngOnInit() {
    this.odd.getLeagues()
      .subscribe((leagues) => {
        this.leagues = leagues;
      });

    this.odd.getAllOdds()
      .subscribe((allOdd) => {
        this.allOdd = allOdd;
      });
  }

addOdd(choose) {
  let index = this.betChoosen.findIndex(x => x.teamChoose == choose.teamChoose);
  if (index === -1) {
    this.betChoosen.push(choose)
  } else {
    this.betChoosen.splice(index, 1);
  }
  this.betChoosen = _.clone(this.betChoosen);
}

  getSportsOdd(elem) {
    this.odd.getOdds(elem)
      .subscribe((odds) => {
        this.odds = odds;
      });
  }
}
