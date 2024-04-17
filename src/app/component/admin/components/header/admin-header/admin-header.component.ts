import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountComponent } from 'src/app/component/header/account/account.component';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

	constructor (private accountService : AccountService) {
	
	}

	ngOnInit() {

	}

	logout() {
     this.accountService.logout()
	}
}
