import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { soupsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { SortProductsService } from 'src/app/services/sort-products/sort-products.service';

@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.scss']
})
export class SoupsComponent implements OnInit, OnDestroy {
  products: soupsProducts[];
  productSubcription: Subscription;
  sortedProducts: any[] = [];
  sortingType:string = 'default';
  isListOpen: boolean = false;
 
  constructor(private soupsServices: ProductService, private sortService: SortProductsService){}


  toggleList() {
	this.isListOpen = !this.isListOpen
  }


  ngOnInit(): void {
	this.soupsServices.getSoupsProducts().subscribe((data:any) => {
		this.products= data.products
		this.sortSoupsProducts()
	})
  }
  ngOnDestroy(): void {
	this.productSubcription.unsubscribe();
  }

  sortSoupsProducts() {
	this.sortedProducts = this.sortService.sortSoupsProducts(this.products, this.sortingType)
  }

  onSortingChange(sortingType: string) {
	this.sortingType = sortingType;
	this.sortSoupsProducts()
  }
}