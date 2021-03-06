import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { TicketService } from '../ticket.service';
import { SessionService } from '../session.service';
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
  amount: number;
  calculator = 0;
  prize: any = 1;
  multip: any;
  user;

  constructor(private ticket: TicketService, private router: Router, private session: SessionService) {
  }

  ngOnInit() {
    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
          }
       );
       this.session.getLoginEmitter().subscribe(
        user => {this.user = user});
        this.calculator = this.prize;
  }

  ngOnChanges(change) {
    this.getTotal();
    this.getMultip();
  }

  getTotal() {
    let total: number = 0;
    total = this.betChoosen.reduce((acc, el) => {
      return acc *= parseFloat(el.oddChoose);
    }, 1)
    this.prize = (this.amount * total).toFixed(2);
  }

  getMultip() {
    this.multip = this.betChoosen.reduce((acc, el) => {
      return (acc *= el.oddChoose).toFixed(2);
    }, 1)
  }

  makeBet() {
    let betForm = {
      risk: this.amount,
      prize: this.prize,
      bets: this.betChoosen,
      user_id: this.user._id
    }
    this.ticket.makeBet(betForm).subscribe(
      () => {
        this.successCb();
        this.router.navigate(['/tickets']);
      }
    );
    this.user.cashier = this.user.cashier - this.amount;
    this.editUserCash(this.user, this.user);
    $(".choose-boxes").remove();
  }

  editUserCash(user, data) {
    this.session.editCashier(user, data)
      .subscribe(() => {
        this.successCb();
      });
  }

  successCb() {
    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
          }
       );
       this.session.getLoginEmitter().subscribe(
        user => {this.user = user});
        this.calculator = this.prize;
  }

}
