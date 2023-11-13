import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './employee/employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { FilterPipe } from './appPipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeComponent,
    ViewemployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
