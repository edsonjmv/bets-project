import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OddService } from '../odd.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  providers: [OddService]
})
export class LeftBarComponent implements OnInit {
  @Input() league: any;
  @Output() selectSport = new EventEmitter();
  leagues;

  constructor(private odd: OddService) { }

  ngOnInit() {

  }

  onSelectSport(id) {
    this.selectSport.emit(id)
  }

}
