import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'create-user',component:CreateUserComponent},
{path:'user-list',component:UserListComponent},
{path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
