import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CadastrarProdutoService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutoPorId(id) {
    return this.http.get('api/produto/buscar-por-id/' + id).map(res => res.json());
  }

  public salvar(produto) {
    return this.http.post('api/produto/salvar', produto).map(res => res.json());
  }

  public alterar(id, produto) {
    return this.http.put('api/produto/alterar/' + id, produto).map(res => res.json());
  }

  public getUnidades() {
    return this.http.get('api/unidade/buscar-todos').map(res => res.json());
  }

}
