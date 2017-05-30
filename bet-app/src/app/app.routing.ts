import {Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {TicketsComponent} from './tickets/tickets.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {OddCreatorComponent} from './odd-creator/odd-creator.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {EditOddComponent} from './edit-odd/edit-odd.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'create-odds', component: OddCreatorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'admin-list', component: AdminListComponent },
  { path: 'odd/:id', component: EditOddComponent },
  { path: '**', redirectTo: '' }
];
