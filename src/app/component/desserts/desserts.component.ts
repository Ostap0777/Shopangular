import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { desertsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit, OnDestroy {

	desertProducts: desertsProducts[];
	productSubcription: Subscription;

	constructor(private productsService : ProductService){}

	ngOnInit(): void {
		this.productsService.getDesertProducts().subscribe((data:any) => {
			this.desertProducts = data.products;
		})
	}
	ngOnDestroy(): void {
		if(this.productSubcription) this.productSubcription.unsubscribe()
	}
}
