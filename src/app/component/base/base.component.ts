import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; 
import { Subscription } from 'rxjs';
import { DialogHelpComponent } from 'src/app/dialog-help/dialog-help.component';
import { FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy{

	slidesPerView:number = 3;
   private breakpointSubscription: Subscription;
constructor (private breakpointObserver:BreakpointObserver, private dialog: MatDialog) {}




ngOnInit() {

}

openDialog():void {
    let dialogConfig = new MatDialogConfig();
	 dialogConfig.panelClass = 'custom-dialog-container';
	 dialogConfig.width = '500px'
	 dialogConfig.height = '400px'
	 let dialogRef = this.dialog.open(DialogHelpComponent, dialogConfig);

}




 ngOnDestroy(): void {
	this.breakpointSubscription.unsubscribe()
 }
}