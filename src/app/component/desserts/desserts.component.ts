import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { desertsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit, OnDestroy {

	products: desertsProducts[];
	productSubcription: Subscription;
	sortedProducts: any[] = [];
	sortingType: string = 'default';
	isListOpen:boolean = false

	constructor(private productsService : ProductService,private sortService: SortProductsService){}


	toggleList() {
		this.isListOpen = !this.isListOpen
	}

	ngOnInit(): void {
		this.productsService.getDesertProducts().subscribe((data:any) => {
			this.products = data.products;
			this.sortDesertsProducts()
		})
	}
	ngOnDestroy(): void {
		this.productSubcription.unsubscribe();
		 }
		 sortDesertsProducts() {
		  this.sortedProducts = this.sortService.sortDesertsProducts(this.products, this.sortingType);
		}
	  onSortingChange(sortingType: string) {
		  this.sortingType = sortingType;
		  this.sortDesertsProducts();
		
		}
}
