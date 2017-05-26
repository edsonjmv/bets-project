import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { TicketService } from '../ticket.service';
import { Subscription }   from 'rxjs/Subscription';
import * as $ from 'jquery';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss'],
  providers: [TicketService]
})
export class RightBarComponent implements OnInit {
  @Input() betChoosen: any;
  amount: number = 0;
  calculator=0;
  prize: any = 1;

  constructor(private ticket: TicketService, private router: Router) {
  }

  ngOnInit() {
    this.calculator = this.prize;
  }

  ngOnChanges (change) {
    this.getTotal();

  }

  getTotal(){
    let total:number = 0;
    total = this.betChoosen.reduce((acc, el) => {
      return acc *= parseFloat(el.oddChoose);
    }, 1)
    this.prize = (this.amount * total).toFixed(2);
  }

  makeBet(){
    let betForm = {
      risk: this.amount,
      prize: this.prize,
      bets: this.betChoosen
    }
    this.ticket.makeBet(betForm).subscribe(
      (bet) => {
        this.successCb(bet);
        this.router.navigate(['/tickets']);
      }
    );
    $(".choose-boxes").remove();
  }

  successCb(bet) {}

}
