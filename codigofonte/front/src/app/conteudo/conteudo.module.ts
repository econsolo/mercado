import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {MODULE_COMPONENTS_CONTEUDO, MODULE_SERVICES_CONTEUDO} from './conteudo.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    RouterModule.forChild([])
  ],
  declarations: [MODULE_COMPONENTS_CONTEUDO],
  providers: [MODULE_SERVICES_CONTEUDO]
})

export class ConteudoModule {

}


