import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IProducts } from '../models/products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

	url: string = 'https://api.npoint.io/b23895b8043426ca41b4';

	  constructor(private http: HttpClient) { }

	  getAllProducts() {
		return this.http.get<IProducts[]>(`${this.url}`)
	  }

	  getProduct(id:number) {
		return this.http.get<IProducts>(`${this.url}/products/${id}`)
	  }

	  getProductsByCategory(){
		return this.http.get<IProducts[]>(`${this.url}`);
	 }
	

	  getProducts() {
		return this.http.get<IProducts[]>(`${this.url}`)
	  }

		postProduct(product: IProducts) {
		return this.http.post<IProducts>(this.url, product)
	  }

	  updeteProduct(product:IProducts) {
		return this.http.put<IProducts>(`${this.url}/${product.id}`, product)
	  }
	
	  deleteProduct(id:number) {
		return this.http.delete<any>(`${this.url}/products/${id}`)
	  }
}