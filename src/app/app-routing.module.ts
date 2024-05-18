import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./component/base/base.component";
import {BasketComponent} from "./component/header/basket/basket.component";
import {AccountComponent} from "./component/header/account/account.component";
import {AboutUsComponent} from "./component/header/about-us/about-us.component";
import { FeetbackComponent } from './component/feetback/feetback.component';
import { DeliveryComponent } from './component/footer/delivery/delivery.component';
import { ContactComponent } from './component/footer/contact/contact.component';
import { PaymentComponent } from './component/footer/payment/payment.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AppComponent } from './app.component';
import { myGuard1Guard } from './component/admin/guards/admin-guard-can-activate.guard';
import { MyGuard2Guard } from './component/admin/guards/admin-guard-can-deactive.guard';
import { userGuard1Guard } from './component/user/guards/user-guard-1.guard';
import { userGuard2Guard } from './component/user/guards/user-guard-2.guard';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {path:'',component:BaseComponent, data:{category: 'popular'}},
  {path:'hotDish',component: ProductCategoryComponent, data: {category: 'hot'}},
  {path:'soups',component: ProductCategoryComponent, data: {category: 'soups'}},
  {path:'khinkali',component: ProductCategoryComponent, data: {category: 'khinkaliHachap'}},
  {path:'coldDish',component: ProductCategoryComponent, data: {category: 'cold'}},
  {path:'salads',component: ProductCategoryComponent, data: {category: 'salads'}},
  {path:'snack',component: ProductCategoryComponent, data: {category: 'snack'}},
  {path:'freshBakedGoods',component: ProductCategoryComponent, data: {category: 'bakedGoods'}},
  {path:'dessert',component: ProductCategoryComponent, data: {category: 'desert'}},
  {path:'drink',component: ProductCategoryComponent, data: {category: 'drink'}},
  {path:'basket',component:BasketComponent},
  {path:'account',component:AccountComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'feetback',component: FeetbackComponent},
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
	{
		path: 
		'user',
		canActivate: [userGuard1Guard],
		canDeactivate: [userGuard2Guard],
		loadChildren:() => import('./component/user/user-module/user-module.module').then((m) => m.UserModuleModule)
	},
  {path:'app', redirectTo:'', component: AppComponent},


  //{ path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
