import {Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {AuthComponent} from './auth/auth.component';
import {TicketsComponent} from './tickets/tickets.component';

export const routes: Routes = [
    {path: '', component: BoardComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: '**', redirectTo: ''}
];
