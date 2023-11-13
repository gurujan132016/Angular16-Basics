import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {path:'',redirectTo:'employeelist', pathMatch:'full'},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'create',component:EmployeeComponent},
  {path:'view/:id',component:ViewemployeeComponent},
  {path:'update/:id',component:EmployeeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
