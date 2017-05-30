import { Component, OnInit, OnChanges } from '@angular/core';
import { OddService } from '../odd.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  allOdd;
  pattern: string;
  constructor(private oddServ: OddService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.oddServ.getAllOdds()
      .subscribe((allOdd) => {
        this.allOdd = allOdd;
      });
  }

  deleteOdd(eventId) {
    this.oddServ.remove(eventId)
      .subscribe(() => {
        this.successCb();
      });

  }
  successCb() {
    this.getAll()
  }

}
