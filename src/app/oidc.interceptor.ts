import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {OAuthStorage} from "angular-oauth2-oidc";
import {environment} from "../environments/environment";

@Injectable()
export class OidcInterceptor implements HttpInterceptor {

  constructor(
    private authStorage: OAuthStorage,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let url = request.url;
    if (!url.startsWith(environment.urlRoot)) {
      return next.handle(request);
    }

    let token = this.authStorage.getItem('access_token');
    if (token == null) {
      return EMPTY;
    }
    let header = 'Bearer ' + token;
    let headers = request.headers.set('access_token', header);

    request = request.clone({headers});
    return next.handle(request);
  }
}
