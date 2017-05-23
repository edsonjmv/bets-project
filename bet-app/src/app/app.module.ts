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

import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LeftBarComponent,
    MainBarComponent,
    RightBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OddService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
