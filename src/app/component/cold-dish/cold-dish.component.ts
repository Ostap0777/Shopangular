import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { coldDishProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-cold-dish',
  templateUrl: './cold-dish.component.html',
  styleUrls: ['./cold-dish.component.scss']
})
export class ColdDishComponent implements OnInit, OnDestroy{
	products: coldDishProducts[];
	productSubcription: Subscription;
	sortedProducts: any[] = [];
	sortingType: string = 'default';
	isListOpen:boolean = false

	constructor(private coldDishService : ProductService, private sortService: SortProductsService) {}

	toggleList() {
		this.isListOpen = !this.isListOpen
	}



	ngOnInit(): void {
		this.coldDishService.getColdDishProducts().subscribe((data:any) => {
			this.products = data.products
			this.sortColdProducts()
		})
	}
	ngOnDestroy(): void {
		this.productSubcription.unsubscribe();
		 }
		 sortColdProducts() {
		  this.sortedProducts = this.sortService.sortColdProducts(this.products, this.sortingType);
		}
	  onSortingChange(sortingType: string) {
		  this.sortingType = sortingType;
		  this.sortColdProducts();
		}
}
