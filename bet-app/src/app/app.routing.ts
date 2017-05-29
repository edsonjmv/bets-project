import {Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {TicketsComponent} from './tickets/tickets.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {OddCreatorComponent} from './odd-creator/odd-creator.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'board', component: BoardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'create-odds', component: OddCreatorComponent},
    {path: '**', redirectTo: ''}
];
