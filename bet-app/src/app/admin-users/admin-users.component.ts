import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users;

  constructor(private session: SessionService) { }

  ngOnInit() {
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

  editCash(user, amount){
    user.cashier = parseFloat(user.cashier) + parseFloat(amount);
    console.log(user.cashier)
  }

//   this.user.cashier = this.user.cashier - this.amount;
//   this.editUserCash(this.user, this.user);
//
//
// editUserCash(user, data) {
//   this.session.editCashier(user, data)
//     .subscribe(() => {
//       this.successCb();
//     });
// }

}
