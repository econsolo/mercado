import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConsultarProdutoService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutos(nome) {
    return this.http.post('api/produto/buscar', {nome: nome}).map(res => res.json());
  }

  public excluir(id) {
    return this.http.delete('api/produto/excluir/' + id).map(res => res.json());
  }

  public temVinculos(id) {
    return this.http.get('api/produto/tem-vinculos/' + id).map(res => res.json());
  }

}
