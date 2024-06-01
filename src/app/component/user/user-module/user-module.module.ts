import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../components/user-profile/shopping-list/shopping-list.component';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { UserHeaderComponent } from '../components/user-header/user-header.component';


@NgModule({
  declarations: [
	UserProfileComponent,
	ShoppingListComponent,
	UserHeaderComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
