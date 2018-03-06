import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CadastrarUsuarioService {

  constructor(@Inject(Http) private http: Http) {
  }

  public getUsuarioPorId(id) {
    return this.http.get('api/usuario/buscar-por-id/' + id).map(res => res.json());
  }

  public salvar(usuario) {
    return this.http.post('api/usuario/salvar', usuario).map(res => res.json());
  }

  public alterar(id, usuario) {
    return this.http.put('api/usuario/alterar/' + id, usuario).map(res => res.json());
  }

}
