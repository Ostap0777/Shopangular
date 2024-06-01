import { Component, OnInit } from '@angular/core';
import { AccountComponent } from 'src/app/component/header/account/account.component';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
constructor(private accountService: AccountService){}

ngOnInit(): void {
	
}
logout() {
	this.accountService.logout()
}
}
