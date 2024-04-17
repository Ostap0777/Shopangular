import { registerLocaleData } from '@angular/common';
import { Component, OnInit, booleanAttribute} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AccountService } from './services/login/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Midas';
  isAdminMode: boolean = false;

  constructor(private authServices : AccountService) {
  }

  ngOnInit(): void {

  }

}


