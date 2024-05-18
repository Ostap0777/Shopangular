import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';


@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit,OnDestroy  {
  products: IProducts[];
  productSubcription: Subscription;
  sortedProducts: any[] = [];
  sortingType: string = 'default';
  isListOpen: boolean = false

  constructor(private productsServices: ProductService, private sortService: SortProductsService) {}


  toggleList() {
	this.isListOpen = !this.isListOpen
  }

  ngOnInit(): void {
	const category = 'snack'
	this.productSubcription = this.productsServices.getProducts().subscribe((data:any) => {
		this.products = data.products;
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