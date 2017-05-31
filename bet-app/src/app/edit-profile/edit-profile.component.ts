import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user;

  constructor(private session: SessionService, private router: Router) { }

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
          }
       );
  }

}
