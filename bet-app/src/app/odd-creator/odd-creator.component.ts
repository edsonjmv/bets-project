import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-odd-creator',
  templateUrl: './odd-creator.component.html',
  styleUrls: ['./odd-creator.component.scss'],
  providers: [OddService]
})
export class OddCreatorComponent implements OnInit {
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

  constructor(private odd: OddService, private router: Router, private session: SessionService) { }

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
  }

  createNewOdd() {
    this.odd.createOdd(this.formInfo)
      .subscribe(
      (data) => this.successCb(data),
      (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    this.data = data;
    this.error = null;
    this.router.navigate(['/profile'])
  }

}
