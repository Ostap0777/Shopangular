import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { BasketComponent } from './component/header/basket/basket.component';
import { BaseComponent } from './component/base/base.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { AccountComponent } from './component/header/account/account.component';
import { AboutUsComponent } from './component/header/about-us/about-us.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DessertsComponent } from './component/desserts/desserts.component';
import { FeetbackComponent } from './component/feetback/feetback.component';
import { DeliveryComponent } from './component/footer/delivery/delivery.component';
import { PaymentComponent } from './component/footer/payment/payment.component';
import { ContactComponent } from './component/footer/contact/contact.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginInterceptor } from './interceptor/login.interceptor';
import { UserHomeComponent } from './component/user/components/user-profile/home/user-home.component';
import { InformationComponent } from './component/user/components/information/information.component';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { DialogHelpComponent } from './dialog-help/dialog-help.component';
import { MatDialogModule } from '@angular/material/dialog';


register();

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BasketComponent,
    BaseComponent,
    WishListComponent,
    AccountComponent,
    AboutUsComponent,
    NotFoundComponent,
    DessertsComponent,
    FeetbackComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeComponent,
    InformationComponent,
    ProductCategoryComponent,
    DialogHelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
	 MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
