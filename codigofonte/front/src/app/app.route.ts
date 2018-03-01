import {Routes, RouterModule} from '@angular/router';
import {ConteudoComponent} from './conteudo/conteudo.component';

import {MODULE_ROUTES_CONTEUDO} from './conteudo/conteudo.route';

const appRoutes: Routes = [
    { path: '', component: ConteudoComponent,
        children: MODULE_ROUTES_CONTEUDO
    },
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
