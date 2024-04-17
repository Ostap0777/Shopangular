import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { khinkaliHachapProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-khinkali',
  templateUrl: './khinkali.component.html',
  styleUrls: ['./khinkali.component.scss']
})
export class KhinkaliComponent implements OnInit, OnDestroy {
  
	khinkaliHachapProducts : khinkaliHachapProducts[];
	khinkaliHachapSubcription : Subscription;


constructor(private khinkaliHachapServices : ProductService) {}

ngOnInit(): void {
	this.khinkaliHachapServices.getKhinkaliHachapProducts().subscribe((data:any) => {
		this.khinkaliHachapProducts = data.products
	})
}
ngOnDestroy(): void {
	 if(this.khinkaliHachapSubcription) this.khinkaliHachapSubcription.unsubscribe()
}
}
