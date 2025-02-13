import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Basket, IProducts } from '../models/products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

	url: string = 'https://products-8a38a-default-rtdb.firebaseio.com/products.json';
	urlBasket: string = 'https://basket-a3187-default-rtdb.firebaseio.com/basket.json'
	

	  constructor(private http: HttpClient) { }

	  getAllProducts() {
		return this.http.get<IProducts[]>(`${this.url}`)
	  }
	  postProductToBasket(product: Basket) {
		return this.http.post<Basket>(this.urlBasket, product)
	  }
	  getProductsFromBasket() {
		return this.http.get<IProducts[]>(`${this.urlBasket}`)
	  }
	  deleteProductsFromBasket(idFireBase:string) {
		return this.http.delete<Basket>(`https://basket-a3187-default-rtdb.firebaseio.com/basket/${idFireBase}.json`)
	  }

	  updateProductToBasket() {		

	  }

	  getProduct(id:number) {
		return this.http.get<IProducts>(`https://products-49eaf-default-rtdb.firebaseio.com/products/${id}.json`)
	  }

	  getProductsByCategory(){
		return this.http.get<IProducts[]>(`${this.url}`);
	 }
	

	  postProduct(product: IProducts) {
		return this.http.post<IProducts>(this.url, product)
	  }

	  updateProduct(product:IProducts) {
		return this.http.put<IProducts>(`https://products-49eaf-default-rtdb.firebaseio.com/products/${product.id}.json`, product)
	  }
	
	  deleteProduct(id:number) {
		return this.http.delete<any>(`https://products-49eaf-default-rtdb.firebaseio.com/products/${id}.json`)
	  }
}