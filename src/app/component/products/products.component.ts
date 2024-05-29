import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { IProducts } from '../../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProducts[];
  category: string;
  productsSubscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.category = this.route.snapshot.data['category'];
      this.productsSubscription = this.productService.getProductsByCategory().subscribe((data: any) => {
        this.products = data.filter((products:any) => products.category === this.category)
      });
    };

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
