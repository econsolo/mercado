import {Unidade} from './unidade';

export class Produto {
  id: string;
  id_unidade: string;
  nome: string;
  quantidade: number;
  valor: number;

  unidade: Unidade;
}
