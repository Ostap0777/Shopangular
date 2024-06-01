import { publishFacade } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent {
  myForm: FormGroup = new FormGroup({
	name: new FormControl(''),
	opus: new FormControl(''),
	price: new FormControl(''),
	weight: new FormControl(''),
	category: new FormControl(''),
	image: new FormControl('')
  })

 constructor (public dialogRef: MatDialogRef<DialogComponentComponent>,
	@Inject(MAT_DIALOG_DATA) public data:any
 ) {}

 onSubmit() {
	this.data = {
		name: this.myForm.value.name,
		opus: this.myForm.value.opus,
		price: this.myForm.value.price,
		weight: this.myForm.value.weight,
		category: this.myForm.value.category
	}
	this.dialogRef.close(this.data)
 }

 onNoClick():void {
	this.dialogRef.close(null)
 }
}
