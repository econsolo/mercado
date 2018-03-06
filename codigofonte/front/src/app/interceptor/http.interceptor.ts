import {Injectable} from '@angular/core';
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';

declare var $: any;
declare var swal: any;

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: Request, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();

    return super.request(url, this.getRequestOptionArgs(options))
      .catch(res => {
        let erro = {};
        try {
          erro = JSON.parse(res._body);
        } catch (e) {

        }

        let msg = 'Ocorreu um erro :(';
        let title = 'Oops...';

        switch (res.status) {
          case 400:
            break;
          case 401:
            localStorage.removeItem('id_usuario');
            title = 'Acesso Negado!';
            msg = 'Você não está autorizado à acessar esta funcionalidade, volte e efetue o login.';
            this.router.navigate(['/login']);
            break;
          default:
            break;
        }

        swal(
          title,
          msg,
          'error'
        );

        return Observable.throw(res);
      }).finally(() => {
        this.afterRequest();
      });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private beforeRequest() {
    const $carregando = $('#carregando');
    $carregando.css('visibility', 'visible');
    $carregando.find('> span').each(function () {
      $(this)
        .data('origWidth', $(this).width())
        .width(0)
        .animate({
          width: $(this).data('origWidth')
        }, 1200);
    });
  }

  private afterRequest() {
    $('#carregando').css('visibility', 'hidden');
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {

    if (!options) {
      options = new RequestOptions();
    }

    if (!options.headers) {
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');
    }

    const item = localStorage.getItem('id_usuario');
    if (item) {
      const id_usuario = JSON.parse(item);
      if (id_usuario) {
        options.headers.append('id-usuario', id_usuario);
      }
    }

    if (options.headers.get('intercept')) {
      options = null;
    }

    return options;
  }
}
