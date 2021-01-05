import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGuard implements CanActivate {

  constructor(private service: SharedService, private router: Router) {}
  canActivate(): boolean{
    if (this.service.logging_in) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false
    }
  }

}
