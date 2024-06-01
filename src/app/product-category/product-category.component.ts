import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProducts } from '../models/products';
import { Subscription, filter, map } from 'rxjs';
import { SortProductsService } from '../services/sort-products/sort-products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

	products: IProducts[];
	productsSubscription : Subscription;


	category: string;
	sortedProducts: any[] = [];
	sortingType:string = 'default';
	isListOpen:boolean = false;

constructor(private route: ActivatedRoute, private productService: ProductService, private sortService: SortProductsService) {}

toggleList() {
  this.isListOpen = !this.isListOpen
}


ngOnInit(): void {
	this.category = this.route.snapshot.data['category'];
	this.productsSubscription = this.productService.getProductsByCategory().subscribe((data: any) => {
	  this.products = data.filter((products:any) => products.category === this.category)
	  this.sortProducts()
	});

 };

 addProductToBasket(product:IProducts){
	this.productService.postProductToBasket(product).subscribe((data) => 
	this.products.push(data))
 }



sortProducts() {
  this.sortedProducts= this.sortService.sortProducts(this.products, this.sortingType)
}

onSortingChange(sortingType:string) {
	this.sortingType = sortingType;
	this.sortProducts()

}

 ngOnDestroy(): void {
	if(this.productsSubscription) this.productsSubscription.unsubscribe()

 }
}