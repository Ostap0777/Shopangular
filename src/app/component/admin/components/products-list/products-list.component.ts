import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
   products: IProducts[];
	productSubscription: Subscription;



	constructor(private productService: ProductService,public dialog: MatDialog) {}

 ngOnInit(): void {
     this.productSubscription = this.productService.getAllProducts().subscribe((data:any) => {
		this.products = data.products
	  })
 }

 deleteItem(id:number) {
	this.productService.deleteProduct(id).subscribe((data:any) => console.log(data))
	console.log(id)
 }

 openDialog():void {
	let dialogConfig = new MatDialogConfig();
	dialogConfig.width = '600px',
	dialogConfig.disableClose = true
	const dialogRef = this.dialog.open(DialogComponentComponent, dialogConfig)
	dialogRef.afterClosed().subscribe( (data) => {
		if(data)
		this.postData(data)
 });
 }

	postData(data: IProducts) {
		console.log(data)
		this.productService.postProduct(data).subscribe((data) => this.products.push(data))
	}

}
