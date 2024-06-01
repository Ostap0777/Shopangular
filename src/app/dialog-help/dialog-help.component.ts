import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-help',
  templateUrl: './dialog-help.component.html',
  styleUrls: ['./dialog-help.component.scss']
})
export class DialogHelpComponent {
constructor(public dialogRef: MatDialogRef<DialogHelpComponent>){}

close() {
	this.dialogRef.close()
}
}
