import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';

import {CustomFormsModule} from 'ng2-validation';

import {routing} from './app.route';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {httpFactory} from './interceptor/http.factory';

import {ConteudoComponent} from './conteudo/conteudo.component';
import {ConteudoModule} from './conteudo/conteudo.module';

import {CadastrarUsuarioComponent} from './cadastrar-usuario/cadastrar-usuario.component';
import {CadastrarUsuarioService} from './cadastrar-usuario/cadastrar-usuario.service';

import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';

import {AuthGuard} from './interceptor/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ConteudoModule,
    routing,
    HttpModule,
    CustomFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  declarations: [
    AppComponent,
    ConteudoComponent,
    CadastrarUsuarioComponent,
    LoginComponent
  ],
  providers: [
    {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, Router]},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CadastrarUsuarioService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
