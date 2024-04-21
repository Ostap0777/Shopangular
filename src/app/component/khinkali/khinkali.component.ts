import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { khinkaliHachapProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-khinkali',
  templateUrl: './khinkali.component.html',
  styleUrls: ['./khinkali.component.scss']
})
export class KhinkaliComponent implements OnInit, OnDestroy {
  
	products : khinkaliHachapProducts[];
	productSubcription : Subscription;
	sortedProducts:any[] = [];
	sortingType: string = 'default';
	isListOpen: boolean = false;


constructor(private khinkaliHachapServices : ProductService, private sortService: SortProductsService) {}


toggleList() {
	this.isListOpen = !this.isListOpen
}

ngOnInit(): void {
	this.khinkaliHachapServices.getKhinkaliHachapProducts().subscribe((data:any) => {
		this.products = data.products
		this.sortKhinkaliHachapProducts()
	})
}
ngOnDestroy(): void {
	this.productSubcription.unsubscribe();
}

sortKhinkaliHachapProducts() {
  this.sortedProducts = this.sortService.sortKhinkaliHachapProducts(this.products, this.sortingType)
}

onSortingChange(sortingType: string) {
this.sortingType = sortingType;
this.sortKhinkaliHachapProducts()
}
}