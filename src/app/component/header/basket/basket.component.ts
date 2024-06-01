import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy{
constructor(private productService: ProductService) {};
product: IProducts[];
basketSubscription: Subscription;

ngOnInit(): void {
	this.basketSubscription = this.productService.getProductsFromBasket().subscribe((data: any) => {
		 this.product = Object.keys(data).map(key => ({ id: key, ...data[key] }));
		 console.log(data.product)
		 this.totalPrice();
	});
}

removeProductToBasket(product: IProducts) {
	this.basketSubscription = this.productService.deleteProductsFromBasket(product.id).subscribe(() => {
		let idx = this.product.findIndex((data) => data.id === product.id)
		this.product.splice(idx,1)
	})
 }

 totalPrice() {
	let totalPrice = 0;

	for(let product of this.product) {
		totalPrice += product.price
	}
	return totalPrice
 }
ngOnDestroy(): void {
	if(this.basketSubscription)
		this.basketSubscription.unsubscribe()
}
}
