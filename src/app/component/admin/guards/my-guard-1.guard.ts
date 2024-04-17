import { ActivatedRouteSnapshot, CanActivate, RouteConfigLoadEnd, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from 'src/app/services/login/account.service';

   @Injectable ({
		providedIn: 'root'
	})
	

export class myGuard1Guard implements CanActivate {

	constructor(private accountServices: AccountService, private route: Router) {

	}

	canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
		if (!this.accountServices.isLoggetIn()) {
			if (state.url !== '/account') {
			  this.route.navigate(['/account']);
			}
			return false;
		 }
		 return true;
	}

}