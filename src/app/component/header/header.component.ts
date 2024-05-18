import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  coldDisher: boolean = false;
  hotDisher: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private router: Router, private accountService: AccountService) {}

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
