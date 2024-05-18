import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { IProducts } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class SortProductsService {
	private default: string = 'default';
	private ascending: string = 'ascending';
	private descending: string = 'descending'

  constructor(private productsServices: ProductService  ) { }


 
  sortProducts(products: IProducts[], sortingType: string): IProducts[] {
	switch (sortingType) {
	  case this.default:
		 return products;
	  case this.ascending:
		 return [...products].sort((a, b) => a.price - b.price);
	  case this.descending:
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
 }
}