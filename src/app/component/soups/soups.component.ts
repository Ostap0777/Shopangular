import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { soupsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.scss']
})
export class SoupsComponent implements OnInit, OnDestroy {
  soupsProduct: soupsProducts[];
  soupsSubcription: Subscription;

  constructor(private soupsServices: ProductService){}

  ngOnInit(): void {
	this.soupsServices.getSoupsProducts().subscribe((data:any) => {
		this.soupsProduct = data.products
	})
  }
  ngOnDestroy(): void {
	if(this.soupsSubcription) this.soupsSubcription.unsubscribe()
  }
}
