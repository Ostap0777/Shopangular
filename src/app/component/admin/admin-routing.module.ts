import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { MyGuard2Guard } from './guards/my-guard-2.guard';
import { myGuard1Guard } from './guards/my-guard-1.guard';


const routes: Routes = [
	{path:'',component:AdminDashboardComponent},
	{path:'product',component:ProductsListComponent},
	{path:'products/product/:id',component: ProductDetailsComponent},
	{path:'home',component:HomeComponent},
	{path: '',redirectTo:'home', pathMatch: 'full'}
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
