import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Produto} from '../../model/produto';
import {Unidade} from '../../model/unidade';

@Injectable()
export class InicioService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getProdutos() {
    const unidade = new Unidade();
    unidade.id = '1';
    unidade.nome = 'Unidade(s)';
    const kg = new Unidade();
    unidade.id = '2';
    unidade.nome = 'Kilo(s)';

    const produtos: Produto[] = [];
    const produto1 = new Produto();
    produto1.id = '1';
    produto1.nome = 'Sabonete';
    produto1.quantidade = 9.0;
    produto1.valor = 0.95;
    produto1.id_unidade = unidade.id;
    produto1.unidade = unidade;
    const produto2 = new Produto();
    produto1.id = '2';
    produto1.nome = 'Picanha';
    produto1.quantidade = 11.0;
    produto1.valor = 58.99;
    produto1.id_unidade = kg.id;
    produto1.unidade = kg;

    produtos.push(produto1);
    produtos.push(produto2);
    return produtos;
  }

}
