import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { myGuard1Guard } from './guards/admin-guard-can-activate.guard';
import { MyGuard2Guard } from './guards/admin-guard-can-deactive.guard';




const routes: Routes = [
	{path:'',component:AdminDashboardComponent},
	{path:'products',component:ProductsListComponent},
	{path:'product/:id', component: ProductsDetailsComponent},
	{path:'home',component:HomeComponent},
	{path: 'products/product', redirectTo: 'products', pathMatch: 'full'},
	{path: '',redirectTo:'home', pathMatch: 'full'}
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
