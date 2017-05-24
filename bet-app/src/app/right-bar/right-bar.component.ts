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
  amount: any = 0;
  calculator=0;
  price: number = 1;

  constructor() {
  }

  ngOnInit() {
    this.calculator = this.price;
  }

  ngOnChanges (change) {
    this.getTotal();

  }

  getTotal(){
    let total = 0;
    total = this.betChoosen.reduce((acc, el) => {
      return acc *= parseFloat(el.oddChoose);
    }, 1)
    console.log(this.price)
    this.price = this.amount * total;
  }

  // onInputChange () {
  //   get all the values in the list
  //   calculate
  //   change price value
  // }

}
