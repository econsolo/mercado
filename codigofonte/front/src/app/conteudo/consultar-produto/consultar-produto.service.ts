import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConsultarProdutoService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutos() {
    return this.http.get('api/produto/buscar-todos').map(res => res.json());
  }

}
