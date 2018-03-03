import {Unidade} from './unidade';

export class Produto {
  id: string;
  nome: string;
  quantidade: number;
  valor: number;
  valor_total: number;

  unidade: Unidade = new Unidade();
}
