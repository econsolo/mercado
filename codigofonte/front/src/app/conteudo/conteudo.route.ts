import {Route} from '@angular/router';

import {ConteudoService} from './conteudo.service';

import {InicioComponent} from './inicio/inicio.component';
import {InicioService} from './inicio/inicio.service';

import {ConsultarProdutoComponent} from './consultar-produto/consultar-produto.component';
import {ConsultarProdutoService} from './consultar-produto/consultar-produto.service';

export const MODULE_ROUTES_CONTEUDO: Route[] = [
  {path: 'inicio', component: InicioComponent},
  {path: 'consultar-produto', component: ConsultarProdutoComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

export const MODULE_COMPONENTS_CONTEUDO = [
  InicioComponent,
  ConsultarProdutoComponent
];

export const MODULE_SERVICES_CONTEUDO = [
  ConteudoService,
  InicioService,
  ConsultarProdutoService
];
