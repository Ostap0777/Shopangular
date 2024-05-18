import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/login/account.service';
import { Injectable } from '@angular/core';

@Injectable ({
	providedIn: 'root'
})

export class userGuard1Guard implements CanActivate {
	constructor(private accountService: AccountService,private route: Router) {}

	canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
		if (!this.accountService.isLoggedIn()) {
			if (state.url !== '/account') {
			  this.route.navigate(['/account']);
			}
			return false;
		 }
		 return true;
	}
		}
	
