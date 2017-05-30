import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

import { OddService } from './odd.service';
import { TicketService } from './ticket.service';
import { SessionService } from "./session.service";

import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OddCreatorComponent } from './odd-creator/odd-creator.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { EditOddComponent } from './edit-odd/edit-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LeftBarComponent,
    MainBarComponent,
    RightBarComponent,
    TicketsComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    OddCreatorComponent,
    ProfileComponent,
    EditProfileComponent,
    AdminListComponent,
    EditOddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OddService, TicketService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
