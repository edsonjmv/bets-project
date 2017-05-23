import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OddService } from '../odd.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  providers: [OddService]
})
export class MainBarComponent implements OnInit {
  @Input() odd: any;
  odds;

  constructor(private oddServ: OddService) { }

  ngOnInit() {
    this.oddServ.getOdds()
      .subscribe((odds) => {
        this.odds = odds;
      });
  }
}
