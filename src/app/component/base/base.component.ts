import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy{

	slidesPerView:number = 3;
   private breakpointSubscription: Subscription;
constructor (private breakpointObserver:BreakpointObserver ) {}



ngOnInit() {
	this.breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.XLarge, 
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
		if(result.matches) {
			if (window.innerWidth >= 1200) {
				this.slidesPerView = 5;
			 }
			 else if (window.innerWidth >= 992) {
				this.slidesPerView = 4;
			 } else if (window.innerWidth >= 768) {
				this.slidesPerView = 3;
			 } else if (window.innerWidth >= 576) {
				this.slidesPerView = 2;
			 }
		}
	 })
}
 ngOnDestroy(): void {
	this.breakpointSubscription.unsubscribe()
 }
}