import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { IProducts } from 'src/app/models/products'; 
import { ProductService } from 'src/app/services/product.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  products:IProducts[];
  product: IProducts
  id:number;
  productSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private productService: ProductService, private activateroute: ActivatedRoute) {}

  myForm:FormGroup = new FormGroup ({
    name: new FormControl(''),
	 opus: new FormControl(''),
	 price: new FormControl(''),
	 weight: new FormControl(''),
  })

  ngOnInit(): void {
	this.activateroute.params.subscribe((params) =>  this.id = params?.['id'])
	this.routeSubscription= this.productService.getProduct(this.id).subscribe((data) => {
		this.product = data
	}
)
 }

 updateData(product: IProducts) {
	this.productService.updateProduct(product).subscribe((data) => console.log(data))
 }

  ngOnDestroy(): void {
  if(this.productSubscription) {
	 this.productSubscription.unsubscribe();
  }

  }
}
