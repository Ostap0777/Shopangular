import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  coldDisher: boolean = false;
  hotDisher: boolean = false;
  isMenuOpen: boolean = false;
  isIconClick: boolean = false;

  constructor(
    private router: Router, 
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeMenu();
		  this.closeMenu(); 
        this.closeDishes();
      }
    });
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  toggleColdDish(): void {
    this.coldDisher = !this.coldDisher;
  }

  toggleHotDish(): void {
    this.hotDisher = !this.hotDisher;
  }

  closeDishes(): void {
	this.coldDisher = false;
	this.hotDisher = false;
 }


  logout(): void {
    this.accountService.logout();
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  iconClick(): void {
    this.isIconClick = !this.isIconClick;
	 this.closeDishes();
  }
}

