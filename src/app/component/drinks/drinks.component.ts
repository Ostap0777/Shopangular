import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { drinksProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit,OnDestroy{

products: drinksProducts[];
productSubcription: Subscription;
sortedProducts: any[] = [];
sortingType: string = 'default';
isListOpen: boolean = false

constructor (private productsService: ProductService, private sortService:SortProductsService) {}

toggleList() {
	this.isListOpen = !this.isListOpen
}




ngOnInit(): void {
	this.productsService.getDrinkProducts().subscribe((data:any) => {
     this.products = data.products
	  this.sortDrinksProducts()
	})
}

ngOnDestroy(): void {
	this.productSubcription.unsubscribe();
	 }
	 sortDrinksProducts() {
	  this.sortedProducts = this.sortService.sortDrinksProducts(this.products, this.sortingType);
	}
  onSortingChange(sortingType: string) {
	  this.sortingType = sortingType;
	  this.sortDrinksProducts();
	
	}
}
