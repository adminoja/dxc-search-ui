import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { KeycloakService } from 'src/app/core/auth/keycloak.service';

@Injectable()
export class SecuredHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (KeycloakService.auth.authz != null && KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
      KeycloakService.getToken();
      let kcToken = KeycloakService.auth.authz.token;
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + kcToken
        }
      });
    }

    return next.handle(request).pipe(
      tap(event => {
        // ถ้าจะทำอะไรตอนรับ response ก็เขียนตรงนี้ เช่น
        // if (event instanceof HttpResponse) { ... }
      })
    );
  }
}
