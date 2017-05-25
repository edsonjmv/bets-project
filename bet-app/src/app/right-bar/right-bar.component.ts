import { Component, OnInit, Input, Output } from '@angular/core';

import { TicketService } from '../ticket.service';
import { Subscription }   from 'rxjs/Subscription';

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
  prize: number = 1;

  constructor(private ticket: TicketService) {
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
    this.prize = (this.amount * total);
  }

  makeBet(){
    let betForm = {
      risk: this.amount,
      prize: this.prize,
      bets: this.betChoosen
    }
    console.log(betForm);
    this.ticket.makeBet(betForm).subscribe(
      (bet) => this.successCb(bet)
    );
  }

  successCb(bet) {}

  // onInputChange () {
  //   get all the values in the list
  //   calculate
  //   change price value
  // }

}
