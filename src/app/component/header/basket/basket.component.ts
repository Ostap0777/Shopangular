import { keyframes } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Basket, IProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy{
constructor(private productService: ProductService) {};
product: Basket[];
basketSubscription: Subscription;

ngOnInit(): void {
	this.basketSubscription = this.productService.getProductsFromBasket().subscribe((data: any) => {
		 this.product = data.dataArray = Object.keys(data).map(key =>({
			idFireBase:key, ...data[key]
		 }))
		 this.totalPrice();
	});
}

removeProductToBasket(product: Basket) {
	this.basketSubscription = this.productService.deleteProductsFromBasket(product.idFireBase).subscribe(() => {
		let idx = this.product.findIndex((data) => data.idFireBase === product.idFireBase)
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
