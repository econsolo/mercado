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

import {CurrencyFormatPipe} from '../assets/currency-format.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ConteudoModule,
    routing,
    CustomFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  declarations: [
    AppComponent,
    ConteudoComponent,
    CurrencyFormatPipe
  ],
  providers: [
    {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, Router]},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
