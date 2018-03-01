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
    let $carregando = $('#carregando');
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

    let token = JSON.parse(localStorage.getItem('token'));
    if (token)
      options.headers.append('auth-token', token);

    if (options.headers.get('intercept')) {
      options = null;
    }

    return options;
  }
}
