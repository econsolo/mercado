import {Inject, Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject(Router) private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('id_usuario')) {
        // está logado
        return true;
    }

    // nao está logado, redireciona para o login
    this.router.navigate(['/login']);
    return false;
  }
}
