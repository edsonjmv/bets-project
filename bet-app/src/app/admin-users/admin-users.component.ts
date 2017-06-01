import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users;
  user;

  constructor(private session: SessionService, private router: Router) { }

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

    this.getAllUsers();
  }

  getAllUsers(){
    this.session.getAllUser()
      .subscribe((users) => {
        this.users = users;
      });
  }

  deleteSingleUser(eventId) {
    this.session.removeSingleUser(eventId)
      .subscribe(() => {
        this.successCb();
      });
    }

  successCb() {
    this.getAllUsers()
  }

  editCash(single, amount){
    single.cashier = parseFloat(single.cashier) + parseFloat(amount);
    this.editUserCash(single, single)
  }

editUserCash(user, data) {
  this.session.updatingCashierAdm(user, data)
    .subscribe(() => {
      this.successCb();
    });
}

}
