import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { coldDishProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cold-dish',
  templateUrl: './cold-dish.component.html',
  styleUrls: ['./cold-dish.component.scss']
})
export class ColdDishComponent implements OnInit, OnDestroy{

	coldDishProduct: coldDishProducts[];
	coldDishSubcription: Subscription;

	constructor(private coldDishService : ProductService) {}

	ngOnInit(): void {
		this.coldDishService.getColdDishProducts().subscribe((data:any) => {
			this.coldDishProduct = data.products
		})
	}
	ngOnDestroy(): void {
		if(this.coldDishSubcription) this.coldDishSubcription.unsubscribe()
	}
}
