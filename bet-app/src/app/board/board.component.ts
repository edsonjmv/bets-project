import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { TicketService } from '../ticket.service';
import * as _ from "lodash";
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';
import * as $ from 'jquery';

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
  user;

  constructor(private odd: OddService, private tick: TicketService, private session: SessionService, private router: Router) { }

  ngOnInit() {

    this.odd.getLeagues()
      .subscribe((leagues) => {
        this.leagues = leagues;
      });

    this.odd.getAllOdds()
      .subscribe((allOdd) => {
        this.allOdd = allOdd;
      });

      this.session.isLoggedIn()
      .subscribe(
        (user) => {
          this.user = user;
          if (this.user === undefined) {
            this.router.navigate(['/login']);
          }
        }
      );
      this.session.getLoginEmitter().subscribe(
        user => {this.user = user});
  }

  addOdd(choose) {
    let index = this.betChoosen.findIndex(x => x.teamChoose == choose.teamChoose);
    if (index === -1) {
      let same = this.betChoosen.findIndex(x => x.oddId == choose.oddId);
      if (same === -1) {
        this.betChoosen.push(choose);
      } else {
        this.betChoosen.splice(same, 1);
        this.betChoosen.push(choose);
      }
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
