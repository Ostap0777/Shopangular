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
basket:IProducts[] = [];
basketSubscription: Subscription;

ngOnInit(): void {
	this.basketSubscription = this.productService.getProductsFromBasket().subscribe((data:any) => {
		this.basket = data
	})
}

ngOnDestroy(): void {
	if(this.basketSubscription)
		this.basketSubscription.unsubscribe()
}
}
