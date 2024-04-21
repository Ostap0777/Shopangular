import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { bakedGoodsProducts, coldDishProducts, desertsProducts, drinksProducts, hotProducts, khinkaliHachapProducts, saladsProducts, snackProducts, soupsProducts } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class SortProductsService {

  constructor(private productsServices: ProductService) { }
 
  sortProducts(products: hotProducts[], sortingType: string): hotProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}

 }

 sortColdProducts(products: coldDishProducts[], sortingType: string): coldDishProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 


sortDesertsProducts(products: desertsProducts[], sortingType: string): desertsProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 



sortDrinksProducts(products: drinksProducts[], sortingType: string): drinksProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 


sortBakedFreshProducts(products: bakedGoodsProducts[], sortingType: string): bakedGoodsProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 


sortKhinkaliHachapProducts(products: khinkaliHachapProducts[], sortingType: string): khinkaliHachapProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 

sortSaladsProducts(products: saladsProducts[], sortingType: string): saladsProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 

sortSnackProducts(products: snackProducts[], sortingType: string):snackProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 

sortSoupsProducts(products: snackProducts[], sortingType: string):snackProducts[] {
	switch (sortingType) {
	  case 'default':
		 return products;
	  case 'ascending':
		 return [...products].sort((a, b) => a.price - b.price);
	  case 'descending':
		 return [...products].sort((a, b) => b.price - a.price);
	  default:
		 return products;
	}
} 


}
