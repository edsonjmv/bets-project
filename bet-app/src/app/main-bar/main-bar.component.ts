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
  @Output() onAdd = new EventEmitter();
  odds;
  highlightedDiv: number;
  highlighted2Div: number;


  constructor(private oddServ: OddService) { }

  ngOnInit() {

  }

  onOddAdd(teamChoose, oddChoose) {
    this.onAdd.emit({ teamChoose, oddChoose })
  }

  toggleHighlight(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    } else {
      this.highlightedDiv = newValue;
    }
  }

  toggleHighlight2(newValue: number) {
    if (this.highlighted2Div === newValue) {
      this.highlighted2Div = 0;
    } else {
      this.highlighted2Div = newValue;
    }
  }

}
