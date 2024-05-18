import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { ShoppingListComponent } from '../components/user-profile/shopping-list/shopping-list.component';
import { UserHomeComponent } from '../components/user-profile/home/user-home.component';

const routes: Routes = [
	{path: 'shoppingList', component: ShoppingListComponent},
	{path: '', component: UserProfileComponent},
	{path: '',redirectTo:'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
