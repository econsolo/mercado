import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {MODULE_COMPONENTS_CONTEUDO, MODULE_SERVICES_CONTEUDO} from './conteudo.route';
import {CurrencyMaskConfig, CURRENCY_MASK_CONFIG} from 'ng2-currency-mask/src/currency-mask.config';
import localePT from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePT);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    CurrencyMaskModule,
    RouterModule.forChild([])
  ],
  declarations: [MODULE_COMPONENTS_CONTEUDO],
  providers: [
    MODULE_SERVICES_CONTEUDO,
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    {provide: LOCALE_ID, useValue: 'pt'}
  ]
})

export class ConteudoModule {

}


