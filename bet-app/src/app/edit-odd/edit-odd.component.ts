import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-odd',
  templateUrl: './edit-odd.component.html',
  styleUrls: ['./edit-odd.component.scss']
})
export class EditOddComponent implements OnInit {
  formInfo = {
    league_id: '',
    participants: ['', ''],
    status: 'Pending',
    odds: ['', ''],
    image1: '',
    image2: ''
  };
  error: string;
  data: any;
  user;
  odd;

  constructor(private oddServ: OddService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingle(params['id']);
    });
  }

  getSingle(id) {
    this.oddServ.getSingleOdd(id)
      .subscribe((odd) => {
        this.odd = odd;
      });
  }

  edit() {
    this.oddServ.edit(this.odd, this.formInfo)
      .subscribe(() => {
        this.successCb();
      });

  }
  successCb() {
    this.router.navigate(['/admin-list'])
  }

}
