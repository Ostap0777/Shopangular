import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    ProductsListComponent,
	 AdminDashboardComponent,
    AdminHeaderComponent,
	 ProductsDetailsComponent,
    DialogComponentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
	 MatDialogModule,
	 ReactiveFormsModule,
	 FormsModule
  ],
  providers:[

  ]
})
export class AdminModule { }
