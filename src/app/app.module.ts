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
import { SaladsComponent } from './component/salads/salads.component';
import { SnackComponent } from './component/snack/snack.component';
import { FreshBakedGoodsComponent } from './component/fresh-baked-goods/fresh-baked-goods.component';
import { DessertsComponent } from './component/desserts/desserts.component';
import { DrinksComponent } from './component/drinks/drinks.component';
import { FeetbackComponent } from './component/feetback/feetback.component';
import { ColdDishComponent } from './component/cold-dish/cold-dish.component';
import { HotDishComponent } from './component/hot-dish/hot-dish.component';
import { SoupsComponent } from './component/soups/soups.component';
import { KhinkaliComponent } from './component/khinkali/khinkali.component';
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
    SaladsComponent,
    SnackComponent,
    FreshBakedGoodsComponent,
    DessertsComponent,
    DrinksComponent,
    FeetbackComponent,
    ColdDishComponent,
    HotDishComponent,
    SoupsComponent,
    KhinkaliComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeComponent,
    InformationComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
