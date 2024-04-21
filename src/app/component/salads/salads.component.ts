import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { saladsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent implements OnInit, OnDestroy {
products: saladsProducts[];
productSubcription : Subscription;
sortedProducts: any[] = [];
sortingType: string = 'dafault';
isListOpen: boolean = false


	constructor(private productService: ProductService,private sortService: SortProductsService) {}

	toggleList() {
		this.isListOpen = !this.isListOpen
	}

	ngOnInit(): void {
		this.productService.getSaladsProducts().subscribe((data: any) => {
			this.products = data.products
			this.sortSaladsProducts()
		})
	}
	ngOnDestroy(): void {
		this.productSubcription.unsubscribe();
   }


	sortSaladsProducts() {
		this.sortedProducts = this.sortService.sortSaladsProducts(this.products, this.sortingType)
	}

	onSortingChange(sortingType: string) {
		this.sortingType = sortingType;
		this.sortSaladsProducts()
	}
}

