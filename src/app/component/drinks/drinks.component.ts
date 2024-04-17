import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { drinksProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit,OnDestroy{

drinkProducts: drinksProducts[];
productsSubcription: Subscription;

constructor (private productsService: ProductService) {}

ngOnInit(): void {
	this.productsService.getDrinkProducts().subscribe((data:any) => {
     this.drinkProducts = data.products
	})
}

ngOnDestroy(): void {
	if(this.productsSubcription) this.productsSubcription.unsubscribe();
}
}
