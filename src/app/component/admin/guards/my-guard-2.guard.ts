import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from 'src/app/services/login/account.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGuard2Guard implements CanDeactivate<any> {

  constructor(private accountServices: AccountService) {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');
      return true;
    } else {
      return false;
    }
  }
}

