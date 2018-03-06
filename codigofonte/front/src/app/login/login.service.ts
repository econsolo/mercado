import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(@Inject(Http) private http: Http) {
  }

  public entrar(usuario) {
    return this.http.post('api/usuario/entrar', usuario).map(res => res.json());
  }


}
