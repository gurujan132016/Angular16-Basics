import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewuserinformationComponent } from './viewuserinformation/viewuserinformation.component';

const routes: Routes = [
  {path:'',redirectTo:'userlist', pathMatch:'full'},
  {path:'userlist',component:UserlistComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registration/:id',component:RegistrationComponent},
  {path:'viewuserinformation/:id',component:ViewuserinformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
