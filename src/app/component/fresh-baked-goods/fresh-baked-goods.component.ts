import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { bakedGoodsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-fresh-baked-goods',
  templateUrl: './fresh-baked-goods.component.html',
  styleUrls: ['./fresh-baked-goods.component.scss']
})
export class FreshBakedGoodsComponent implements OnInit, OnDestroy {
   bakedProduct: bakedGoodsProducts[];
	productsSubcription: Subscription;

	constructor(private productsService : ProductService) {}

	ngOnInit(): void {
		this.productsService.getBakesGoodsProducts().subscribe((data:any) => {
         this.bakedProduct = data.products
		})
	}
	ngOnDestroy(): void {
		if(this.productsSubcription) this.productsSubcription.unsubscribe();
	}
}
