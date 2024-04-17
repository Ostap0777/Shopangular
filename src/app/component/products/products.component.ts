import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {ProductService} from "../../services/product.service";
import {IProducts} from "../../models/products";


@Component({
 selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

products : IProducts[]
productsSubcription: Subscription;
  constructor(private productsService: ProductService) {
  }

ngOnInit() {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.products
    })
}

ngOnDestroy() {
	if(this.productsSubcription) this.productsSubcription.unsubscribe()
}


}
