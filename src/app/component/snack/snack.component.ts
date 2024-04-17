import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { snackProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit,OnDestroy  {
  snackProduct: snackProducts[];
  snackSubcription: Subscription;

  constructor(private snackServices: ProductService) {}

ngOnInit(): void {
	this.snackServices.getSnackProducts().subscribe((data:any) => {
		this.snackProduct = data.products
	})
}
ngOnDestroy(): void {
	if(this.snackSubcription) this.snackSubcription.unsubscribe()
}

}

