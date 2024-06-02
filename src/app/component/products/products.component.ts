import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Basket, IProducts } from '../../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product: IProducts[];
  products:Basket[]
  category: string;
  productsSubscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.category = this.route.snapshot.data['category'];
      this.productsSubscription = this.productService.getProductsByCategory().subscribe((data: any) => {
        this.products = data.filter((product:any) => product.category === this.category);
      });
    };

	 addProductToBasket(product:Basket){
		this.productService.postProductToBasket(product).subscribe((data) => 
		this.products.push(data))
	 }
	 
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
