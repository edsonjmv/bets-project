import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [OddService]
})
export class BoardComponent implements OnInit {
  leagues;
  odds;
  tickets: Array<any> = [];

  constructor(private odd: OddService) { }

  ngOnInit() {
    this.odd.getLeagues()
      .subscribe((leagues) => {
        this.leagues = (<any>Object).values(leagues);
        console.log(leagues);
      });

    // this.odd.getNBA()
    //   .subscribe((odds) => {
    //     this.odds = (<any>Object).values(odds);
    //     console.log(odds);
    //   });

    this.odd.getMLB()
      .subscribe((odds) => {
        this.odds = (<any>Object).values(odds);
        console.log(odds);
      });

    // this.odd.getSerieA()
    //   .subscribe((odds) => {
    //     this.odds = (<any>Object).values(odds);
    //     console.log(odds);
    //   });
  }

  onClick(event) {
    console.log(event.target.textContent);
    this.tickets.push(event.target.textContent);
    }

}
