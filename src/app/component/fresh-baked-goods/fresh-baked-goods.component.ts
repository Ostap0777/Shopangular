import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { bakedGoodsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-fresh-baked-goods',
  templateUrl: './fresh-baked-goods.component.html',
  styleUrls: ['./fresh-baked-goods.component.scss']
})
export class FreshBakedGoodsComponent implements OnInit, OnDestroy {
   products: bakedGoodsProducts[];
	productSubcription: Subscription;
	sortedProducts:any[] = [];
	sortingType: string = 'dafault';
	isListOpen:boolean = false

	constructor(private productsService : ProductService,private sortService: SortProductsService) {}

toggleList() {
	this.isListOpen = !this.isListOpen
}

	ngOnInit(): void {
		this.productsService.getBakesGoodsProducts().subscribe((data:any) => {
         this.products = data.products
			this.sortBakedFreshProducts()
		})
	}
	ngOnDestroy(): void {
		this.productSubcription.unsubscribe();
	}

	sortBakedFreshProducts() {
		this.sortedProducts = this.sortService.sortBakedFreshProducts(this.products, this.sortingType)
	}

	onSortingChange(sortingType:string) {
		this.sortingType = sortingType;
		this.sortBakedFreshProducts()
	}
}

