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
  highlightedDiv: boolean = false;
  highlighted2Div: boolean = false;

  constructor(private oddServ: OddService) { }

  ngOnInit() {

  }

  onOddAdd(teamChoose, oddChoose, oddId) {
    this.onAdd.emit({ teamChoose, oddChoose, oddId })
  }

  toggleHighlight() {
    this.highlighted2Div = false;
    this.highlightedDiv = !this.highlightedDiv;
  }

  toggleHighlight2() {
    this.highlightedDiv = false;
    this.highlighted2Div = !this.highlighted2Div;
  }

}
