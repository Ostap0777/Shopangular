import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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

	products: hotProducts[];
	productSubcription: Subscription;
	sortedProducts: any[] = [];
	sortingType: string = 'default';
	isListOpen:boolean = false



	constructor(private productsService: ProductService, private sortService: SortProductsService) {
	}


toggleList() {
	this.isListOpen = !this.isListOpen
}
	

	ngOnInit(): void {
		this.productsService.getHotProducts().subscribe((data:any) => {
			this.products = data.products
			this.sortProducts()
		})
	}
	  ngOnDestroy(): void {
    this.productSubcription.unsubscribe();
	  }
	  sortProducts() {
		this.sortedProducts = this.sortService.sortProducts(this.products, this.sortingType);
	 }
	onSortingChange(sortingType: string) {
		this.sortingType = sortingType;
		this.sortProducts();
		console.log(this.sortedProducts)
	 }

}