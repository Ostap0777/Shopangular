import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
	coldDisher: boolean = false;
	hotDisher: boolean = false;
	isMenuOpen: boolean = false;
constructor(private accountService: AccountService) {}

	toggleColdDish(): void {
		this.coldDisher = !this.coldDisher;
	 }
  
	 toggleHotDish(): void {
		this.hotDisher = !this.hotDisher;
	 }
  
	 logout(): void {
		this.accountService.logout();
	 }
	 openMenu():void {
	  this.isMenuOpen = !this.isMenuOpen
	 }
}
