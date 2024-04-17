import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { hotProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-hot-dish',
  templateUrl: './hot-dish.component.html',
  styleUrls: ['./hot-dish.component.scss']
})
export class HotDishComponent implements OnInit{

	hotProducts: hotProducts[];
	productSubcription: Subscription;
	sortedProducts: any[] = [];
	sortingType: string = 'default';

	constructor(private productsService: ProductService, private sortService: SortProductsService) {
	}

	ngOnInit(): void {
		this.productsService.getHotProducts().subscribe((data:any) => {
			this.hotProducts = data.products
			this.sortProducts()
		})
	}
	sortProducts() {
		switch(this.sortingType) {
			case 'default':
			this.hotProducts = this.hotProducts;
			break;
			case 'ascending': 
			this.hotProducts = [...this.hotProducts].sort((a,b) => a.price - b.price)
			break;
			case 'descending':
			this.hotProducts = [...this.hotProducts].sort((a,b) => b.price - a.price)
			break;
		}
	}
	onSortingChange(sortingType: string) {
		this.sortingType = sortingType;
		this.sortProducts();
	 }
}
