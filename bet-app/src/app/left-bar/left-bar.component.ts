import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  providers: [OddService]
})
export class LeftBarComponent implements OnInit {
  leagues;

  constructor(private odd: OddService) { }

  ngOnInit() {
    this.odd.getLeagues()
      .subscribe((leagues) => {
        this.leagues = leagues;
      });
  }

}
