import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user;
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
       .subscribe(
         (user) => {
           this.user = user;
          }
       );
       this.session.getLoginEmitter().subscribe(
        user => {this.user = user});
  }

}
