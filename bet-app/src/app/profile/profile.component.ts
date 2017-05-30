import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.user=this.session.loggedUser;
    if (this.user === undefined) {
      this.router.navigate(['/login']);
    }
  }

}
