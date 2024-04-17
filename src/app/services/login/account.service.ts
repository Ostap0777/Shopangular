import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private router: Router) { }

  setToken(token:string) {
	localStorage.setItem('token', token)
  }

  getToken() {
	return localStorage.getItem('token')
  }

  isLoggetIn() {
	return this.getToken() !== null
  }

  login(userInfo: {email:string, password:string}):Observable<string | boolean>{
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
		this.setToken('tstbvrsvsbt')
		return of (true)

	 }
	 return throwError(() => {
		new Error('Failed Login')
	 })
  }
  

  logout() {
	this.router.navigate(['account'])
  }
}
