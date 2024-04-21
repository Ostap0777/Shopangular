import { Component, OnInit } from '@angular/core';
import { bakedGoodsProducts, coldDishProducts, desertsProducts, drinksProducts, hotProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	hotProducts: hotProducts[];
	coldProducts: coldDishProducts[];
	desertsProducts: desertsProducts[];
	drinksProducts: drinksProducts[];
	bakesGoodsProducts: bakedGoodsProducts[]

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.getHotProducts().subscribe((data: any) => {
			this.hotProducts = data.products;
		});

		this.productService.getColdDishProducts().subscribe((data:any) => {
			this.coldProducts = data.products;
		})

		this.productService.getDesertProducts().subscribe((data:any) => {
			this.desertsProducts = data.products;
		})

		this.productService.getDrinkProducts().subscribe((data:any) => {
			this.drinksProducts = data.products;
		})

		this.productService.getBakesGoodsProducts().subscribe((data:any) => {
			this.bakesGoodsProducts = data.products;
		})
	}
}
