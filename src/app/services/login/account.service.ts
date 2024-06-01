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

  isLoggedIn() {
	return this.getToken() !== null
  }

  isAdmin() {
	const token = this.getToken();
	return token === 'adminToken'
  }

  login(userInfo: {email:string, password:string}):Observable<string | boolean>{
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
		this.setToken('adminToken')
		return of (true)
	 }

	 else if(userInfo.email === 'kolosivskyyostap@gmail.com' && userInfo.password === '2727012k') {
		this.setToken('userToken');
		return of (true)
	 }
	 return throwError(() => {
		new Error('Failed Login')
	 })
  }

  checkLogin(url: string) {
	if (!this.isLoggedIn()) {
	  this.router.navigate(['/account']);
	  return false;
	}
	return true;
 }
  
  logout() {
	localStorage.removeItem('token');
	this.router.navigate(['account'])
  }
}
