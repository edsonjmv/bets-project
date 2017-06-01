import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session.service'

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

  constructor(private oddServ: OddService, private route: ActivatedRoute, private router: Router, private session: SessionService) { }

  ngOnInit() {

    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
           this.session.getLoginEmitter().subscribe(
             user => this.user = user);
             if (this.user === undefined) {
               this.router.navigate(['/login']);
             }
             if (this.user.admin === false) {
               this.router.navigate(['/']);
             }
          }
       );

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
