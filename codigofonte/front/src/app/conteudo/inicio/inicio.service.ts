import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Produto} from '../../model/produto';
import {Unidade} from '../../model/unidade';

@Injectable()
export class InicioService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutos() {
    return this.http.get('api/produto/buscar-todos').map(res => res.json());
  }

}
