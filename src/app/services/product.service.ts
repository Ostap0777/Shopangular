import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProducts, bakedGoodsProducts, coldDishProducts, desertsProducts, drinksProducts, hotProducts, khinkaliHachapProducts, saladsProducts, snackProducts, soupsProducts} from "../models/products";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductService {



url: string = '../../../../assets/products.json';
hotUrl: string = '../../../../assets/hotProduct.json';
drinkUrl: string = '../../../../assets/drinksProduct.json';
saladsUrl: string ='../../../../assets/saladsProduct.json';
bakedGoodsUrl: string = '../../../../assets/bakesGoodsProduct.json';
desertUrl: string = '../../../../assets/desertProduct.json';
soupsUrl: string = '../../../../assets/soupsProduct.json';
khinkaliHachapUrl: string = '../../../../assets/khinkaliHachapProduct.json';
snackUrl: string = '../../../../assets/snackProduct.json';
coldDish: string = '../../../../assets/coldDishProduct.json'

  constructor(private http: HttpClient) { }



  getProducts(){
    return this.http.get<IProducts[]>(this.url)
  }

  getProduct(id:number){
	return this.http.get<IProducts>(`${this.url}/${id}`)
  }


  

  getHotProducts(){
	return this.http.get<hotProducts[]>(this.hotUrl)
  }
  getHotProduct(id:number) {
    return this.http.get<hotProducts>(`${this.hotUrl}/${id}`)
  }




  getDrinkProducts() {
return this.http.get<drinksProducts[]>(this.drinkUrl)
 }
 getDrinkProduct(id:number) {
	return this.http.get<drinksProducts>(`${this.drinkUrl}/${id}`)
 }




 getSaladsProducts() {
	return this.http.get<saladsProducts[]>(this.saladsUrl)
 }

 getSaladsProduct(id:number) {
	return this.http.get<saladsProducts>(`${this.saladsUrl}/${id}`)
 }



 getBakesGoodsProducts() {
	return this.http.get<bakedGoodsProducts[]>(`${this.bakedGoodsUrl}`)
 }
 
 getBakesGoodsProduct(id:number) {
	return this.http.get<bakedGoodsProducts>(`${this.bakedGoodsUrl}/${id}`)
 }



 getDesertProducts() {
	return this.http.get<desertsProducts[]>(`${this.desertUrl}`)
 }

 getDesertProduct(id:number) {
	return this.http.get<desertsProducts>(`${this.desertUrl}/${id}`)
 }



 getSoupsProducts() {
	return this.http.get<soupsProducts[]>(`${this.soupsUrl}`)
 }

 getSoupsProduct(id:number) {
	return this.http.get<soupsProducts>(`${this.soupsUrl}/${id}`)
 }


 getKhinkaliHachapProducts() {
	return this.http.get<khinkaliHachapProducts[]>(`${this.khinkaliHachapUrl}`)
 }

 getKhinkaliHachapProduct(id:number) {
	return this.http.get<khinkaliHachapProducts>(`${this.khinkaliHachapUrl}/${id}`)
 }




 getSnackProducts() {
	return this.http.get<snackProducts[]>(`${this.snackUrl}`)
 }

 getSnackProduct(id:number) {
	return this.http.get<snackProducts>(`${this.snackUrl}/${id}`)
 }



 getColdDishProducts() {
	return this.http.get<coldDishProducts[]>(`${this.coldDish}`)
 }

 getColdDishProduct(id:number) {
	return this.http.get<coldDishProducts>(`${this.coldDish}/${id}`)
 }
}





