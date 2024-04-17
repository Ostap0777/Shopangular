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

	constructor(private router : Router, private accountServic : AccountService) {

	}

  submitLogin() {
	this.accountServic.login(this.loginForm.value).subscribe( {
		next: () => this.router.navigate(['admin']),
		error: (err) => alert(err.message)
	})
  }
	ngOnInit () {
    this.loginForm = new FormGroup( {
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl(
        '', [Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });

	 if(this.accountServic.isLoggetIn()) {
		this.router.navigate(['admin'])
	 }
	}

}

