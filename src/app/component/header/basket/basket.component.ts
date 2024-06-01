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
basketProduct: Basket[];
basketSubscription: Subscription;

ngOnInit(): void {
	this.basketSubscription = this.productService.getProductsFromBasket().subscribe((data:any) => {
		console.log(data)
		this.totalPrice()
	})
}
removeProductToBasket(product: Basket) {
	this.basketSubscription = this.productService.deleteProductsFromBasket(product.key).subscribe(() => {
		let idx = this.basketProduct.findIndex((data) => data.id === product.id)
		this.basketProduct.splice(idx,1)
	})
 }

 totalPrice() {
	let totalPrice = 0;

	for(let product of this.basketProduct) {
		totalPrice += product.price
	}
	return totalPrice
 }
ngOnDestroy(): void {
	if(this.basketSubscription)
		this.basketSubscription.unsubscribe()
}
}
