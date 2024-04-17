import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountService } from 'src/app/services/login/account.service';
import { AdminStatusService } from 'src/app/services/AdminStatus/admin-status.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	coldDisher: boolean = false;
	hotDisher: boolean = false;




	constructor() {route: Router}
	toggleColdDish():void {
		this.coldDisher = !this.coldDisher;
	}

	toggleHotDish() {
		this.hotDisher = !this.hotDisher;
	}




}


