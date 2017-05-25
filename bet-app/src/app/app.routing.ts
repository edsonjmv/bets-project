import {Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {AuthComponent} from './auth/auth.component';

export const routes: Routes = [
    {path: '', component: BoardComponent},
    {path: 'auth', component: AuthComponent},
    {path: '**', redirectTo: ''}
];
