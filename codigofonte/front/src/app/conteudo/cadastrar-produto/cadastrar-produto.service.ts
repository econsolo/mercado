import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CadastrarProdutoService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutoPorId(id) {
    return this.http.get('api/produto/buscar-por-id/' + id).map(res => res.json());
  }

}
