import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req, next) {
    let authService = this.inject.get(SharedService)
    let token = authService.getToken();
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })

    return next.handle(tokenizedReq)
  }
}
