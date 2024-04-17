import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./component/base/base.component";
import {ProductsComponent} from "./component/products/products.component";
import {ProductDetailsComponent} from "./component/product-details/product-details.component";
import {BasketComponent} from "./component/header/basket/basket.component";

import {AccountComponent} from "./component/header/account/account.component";
import {AboutUsComponent} from "./component/header/about-us/about-us.component";
import { ColdDishComponent } from './component/cold-dish/cold-dish.component';
import { HotDishComponent } from './component/hot-dish/hot-dish.component';
import { FeetbackComponent } from './component/feetback/feetback.component';
import { DessertsComponent } from './component/desserts/desserts.component';
import { SnackComponent } from './component/snack/snack.component';
import {FreshBakedGoodsComponent} from "./component/fresh-baked-goods/fresh-baked-goods.component";
import { DrinksComponent } from './component/drinks/drinks.component';
import { SaladsComponent } from './component/salads/salads.component';
import { KhinkaliComponent } from './component/khinkali/khinkali.component';
import { SoupsComponent } from './component/soups/soups.component';
import { DeliveryComponent } from './component/footer/delivery/delivery.component';
import { ContactComponent } from './component/footer/contact/contact.component';
import { PaymentComponent } from './component/footer/payment/payment.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AppComponent } from './app.component';
import { myGuard1Guard } from './component/admin/guards/my-guard-1.guard';
import { MyGuard2Guard } from './component/admin/guards/my-guard-2.guard';

const routes: Routes = [
  {path:'',component:BaseComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'basket',component:BasketComponent},
  {path:'account',component:AccountComponent},
  {path:'about-us',component: AboutUsComponent},
  {path: 'coldDish', component:ColdDishComponent},
  {path: 'hotDish',component:HotDishComponent},
  {path:'feetback',component: FeetbackComponent},
  {path:'desserts',component: DessertsComponent},
  {path:'snack', component:SnackComponent},
  {path:'freshBakedGoods',component:FreshBakedGoodsComponent},
  {path:'salads',component:SaladsComponent},
  {path:'khinkali',component:KhinkaliComponent},
  {path:'soups',component:SoupsComponent},
  {path:'drinks',component:DrinksComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'contact',component:ContactComponent},
  {path:'payment',component:PaymentComponent},
  {path:'contacts', component:ContactComponent},
  {path:
	 'admin',
	 canActivate: [myGuard1Guard],
	 canDeactivate: [MyGuard2Guard],
	 loadChildren: () => import('./component/admin/admin.module').then((m) => m.AdminModule)
	},
  {path:'app', redirectTo:'', component: AppComponent},



  { path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
