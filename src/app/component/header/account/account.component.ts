import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
   loginForm: FormGroup

	constructor(private router : Router, private accountServices : AccountService) {

	}

ngOnInit(): void {
	this.loginForm = new FormGroup ({
		'email': new FormControl('',[Validators.required, Validators.email]),
		'password': new FormControl('',[Validators.required])
	})
}

submitLogin() {
	if(this.loginForm.invalid) {
		return
	}
	this.accountServices.login(this.loginForm.value).subscribe({
		next : () => {
			if(this.accountServices.isAdmin()){
				this.router.navigate(['admin'])
			} else {
				this.router.navigate(['user'])
			}
		}
		})
}
}

