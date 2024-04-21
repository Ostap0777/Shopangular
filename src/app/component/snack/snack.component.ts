import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { snackProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit,OnDestroy  {
  products: snackProducts[];
  productSubcription: Subscription;
  sortedProducts: any[] = [];
  sortingType: string = 'default';
  isListOpen: boolean = false

  constructor(private snackServices: ProductService, private sortService: SortProductsService) {}


  toggleList() {
	this.isListOpen = !this.isListOpen
  }

ngOnInit(): void {
	this.snackServices.getSnackProducts().subscribe((data:any) => {
		this.products = data.products
		this.sortSnackProducts()
	})
}
ngOnDestroy(): void {
	this.productSubcription.unsubscribe();
}

sortSnackProducts() {
	this.sortedProducts = this.sortService.sortSnackProducts(this.products, this.sortingType)
}

onSortingChange(sortingType:string) {
	this.sortingType = sortingType;
	this.sortSnackProducts()
}
}