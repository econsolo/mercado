import {Route} from '@angular/router';

import {ConteudoService} from './conteudo.service';

import {InicioComponent} from './inicio/inicio.component';
import {InicioService} from './inicio/inicio.service';


export const MODULE_ROUTES_CONTEUDO: Route[] = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

export const MODULE_COMPONENTS_CONTEUDO = [
  InicioComponent
];

export const MODULE_SERVICES_CONTEUDO = [
  ConteudoService,
  InicioService
];
