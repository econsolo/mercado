import {Routes, RouterModule} from '@angular/router';
import {ConteudoComponent} from './conteudo/conteudo.component';
import {CadastrarUsuarioComponent} from './cadastrar-usuario/cadastrar-usuario.component';
import {LoginComponent} from './login/login.component';

import {MODULE_ROUTES_CONTEUDO} from './conteudo/conteudo.route';
import {AuthGuard} from './interceptor/auth';

const appRoutes: Routes = [
    { path: '', component: ConteudoComponent, canActivate: [AuthGuard],
        children: MODULE_ROUTES_CONTEUDO
    },
    { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
    { path: 'cadastrar-usuario/:id', component: CadastrarUsuarioComponent},
    { path: 'login', component: LoginComponent},
    // otherwise redirect to home
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
