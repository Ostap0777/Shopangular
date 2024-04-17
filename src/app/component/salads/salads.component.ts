import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { saladsProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent implements OnInit, OnDestroy {
saladsProduct: saladsProducts[];
saladsSubcription : Subscription;
	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.getSaladsProducts().subscribe((data: any) => {
			this.saladsProduct = data.products
		})
	}
	ngOnDestroy(): void {
		if(this.saladsSubcription) this.saladsSubcription.unsubscribe()
	}
}

