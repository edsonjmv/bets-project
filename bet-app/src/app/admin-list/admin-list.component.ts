import { Component, OnInit, OnChanges } from '@angular/core';
import { OddService } from '../odd.service';
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  allOdd;
  user;
  pattern: string;
  constructor(private oddServ: OddService, private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(
      user => this.user = user);
    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
             if (this.user === undefined) {
               this.router.navigate(['/login']);
             }
             if (this.user.admin === false) {
               this.router.navigate(['/']);
             }
          }
       );
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
