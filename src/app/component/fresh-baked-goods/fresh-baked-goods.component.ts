import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';


@Component({
  selector: 'app-fresh-baked-goods',
  templateUrl: './fresh-baked-goods.component.html',
  styleUrls: ['./fresh-baked-goods.component.scss']
})
export class FreshBakedGoodsComponent implements OnInit, OnDestroy {
   products: IProducts[];
	productSubcription: Subscription;
	sortedProducts:any[] = [];
	sortingType: string = 'dafault';
	isListOpen:boolean = false

	constructor(private productsServices : ProductService, private sortService: SortProductsService) {}

toggleList() {
	this.isListOpen = !this.isListOpen
}

ngOnInit(): void {
	this.productsServices.getProducts().subscribe(products => {
	  this.products = products.filter(product => product.category === 'bakedGoods');
	  this.sortProducts()
	});
 }
 sortProducts() {
	this.sortedProducts = this.sortService.sortProducts(this.products, this.sortingType)
}
 onSortingChange(sortingType: string) {
	this.sortingType = sortingType;
	this.sortProducts()
 }
 ngOnDestroy(): void {
	if(this.productSubcription) this.productSubcription.unsubscribe()
}
}

